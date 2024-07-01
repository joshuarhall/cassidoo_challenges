// Define a FruitStand class that allows you to add different types of fruits with their quantities and prices, update them, and calculate the total value of all the fruits in the stand. Implement the following methods: addFruit(name, quantity, price), updateQuantity(name, quantity), and totalValue()!

// Example usage:

// Create a new fruit stand
const FruitStand = {
  inventory: {},

  addFruit: function (str, qty, price) {
    this.inventory[str] = [qty, price];
    return `${str} added`;
  },
  updateQuantity: function (str, qty) {
    this.inventory[str][0] = qty;
    return `${str} quantity updated to ${qty}`;
  },
  totalValue: function () {
    let total = 0;
    for (let x of Object.values(this.inventory)) {
      total += x[0] * x[1];
    }
    return `total value: $${total}`;
  },
};

let stand = FruitStand;

// Add fruits to the stand
stand.addFruit("apple", 10, 0.5);
stand.addFruit("banana", 5, 0.2);
stand.addFruit("cherry", 20, 0.1);

// Update the quantity of an existing fruit
stand.updateQuantity("banana", 10);

// Calculate the total value of all fruits in the stand
console.log(stand.totalValue());
