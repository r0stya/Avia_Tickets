class CurrencyUI {
  constructor() {
    this.currency = document.getElementById('currency')
    this.distionary = {
      USD: '$',
      EUR: '€'
    }
  }

  get currencyValue() {
    return this.currency.value
  }

  getCurrencySymbol() {
    return this.distionary[this.currencyValue]
  }
}

const currencyUI = new CurrencyUI()

export default currencyUI