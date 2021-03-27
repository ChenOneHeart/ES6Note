class Coffee {
  make(water) {
      return `${water}+咖啡`;
  }
  cost() {
      return 10;
  }
};

class MilkCoffee {
  constructor(parent) {
      this.parent = parent;
  }
  make(water) {
      return `${this.parent.make(water)}+奶`;
  }
  cost() {
      return this.parent.cost() + 2
  }
}
class SugarCoffee {
  constructor(parent) {
      this.parent = parent;
  }
  make(water) {
      return `${this.parent.make(water) }+糖`;
  }
  cost() {
      return this.parent.cost() + 1
  }
}


let coffee = new Coffee();
let milkCoffee = new MilkCoffee(coffee);
let res = milkCoffee.make('水'); //
let sugarCoffee = new SugarCoffee(milkCoffee);
let res1 = sugarCoffee.make('水');
let cost = sugarCoffee.cost();
console.log(res);
console.log(res1);
console.log(cost);
