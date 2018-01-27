class PizzaSet {
  constructor(pizzaCount) {
    this.pizzaSet = [];
    let date = new Date();
    for (let i=0; i < pizzaCount; i++) {
      date.setTime(date.getTime() + i*25*1000);
      this.pizzaSet.push(new Pizza(i+1, date, 1));
    }
    this.updatePizzasTiming();
    window.setInterval(() => this.updatePizzasTiming(),
      5 * 1000);
  }

  updatePizzasTiming() {
    const now = new Date();
    this.pizzaSet.forEach(pizza => pizza.updateTiming(now));
  }
}