import locations from './store/locations'
import formUI from './views/form'
import currencyUI from './views/currency'
import ticketUI from './views/tickets'
import './plugins/index'
import '../css/style.css'

document.addEventListener('DOMContentLoaded', () => {
  initApp()
  const form = formUI.form
  const dropdown = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(dropdown);

  // Events
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onFormSubmit()
  })

  // Handlers
  async function initApp() {
    await locations.init();
    formUI.setAutocompleteData(locations.shortCitiesList)
  }

  async function onFormSubmit() {
    const origin = locations.getCityCodeByKey(formUI.originValue)
    const destination = locations.getCityCodeByKey(formUI.destinationValue)
    const depard_date = formUI.departDateValue
    const return_date = formUI.returnDateValue
    const currency = currencyUI.currencyValue

    await locations.fetchTickets({
      origin,
      destination,
      depard_date,
      return_date,
      currency
    })
    console.log(locations.lastSearch);
    ticketUI.renderTickets(locations.lastSearch)
  }


})