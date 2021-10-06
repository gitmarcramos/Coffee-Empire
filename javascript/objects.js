//! TOTAL FUNDS
export const generalFunds = {
  funds: 0
}


//! COFFEES
export const coffees = [
  { type: "regular", price: 1, clientSatisfaction: 10 },
  { type: "organic", price: 1.2, clientSatisfaction: 30 },
  { type: "rare", price: 1.5, clientSatisfaction: 50 },
];

function costPerCoffee(amount, buyingPrice) {
  return buyingPrice / amount;
}

// TO CHECK, PISTE DE GUILLAUME
// // const coffeeAlt = {
// //     regular:  { type: "regular", price: 1, clientSatisfaction: 10 },
// // }

// // const conversion = {
// //     "regular": 0,
// //     "mexico": 1,
// //     "regular": 2,
// // }

// // coffeeAlt[e.target.getAttribute("data-coffee-type")]

//! STOCKS
export const stocks = [
  {
    name: "regular",
    buyingPrice: 3,
    quantity: 0,
    clientSatisfaction: 10,
    stockPerBag: 100,
  },
  {
    name: "organic",
    buyingPrice: 5,
    quantity: 0,
    clientSatisfaction: 30,
    stockPerBag: 100,
  },
  {
    name: "rare",
    buyingPrice: 4,
    quantity: 0,
    clientSatisfaction: 50,
    stockPerBag: 25,
  },
];






//! SHOPS
export const shops = [
  {
    name: "Tiny Shop",
    amount: 0,
    sellingPriceValue: 3000,
    price: 3200,
    rent: 250 * 1 - 250,
    hired: 0,
    maxToHire: 2 * 1 - 2,
    employeesType: [
      { type: "Intern", amount: 0 },
      { type: "Barista", amount: 0 },
      { type: "Master Barista", amount: 0 },
    ],
    maxCoffeeCapacity: 6 * 1 - 6,
  },
  {
    name: "Barista Shop",
    amount: 0,
    sellingPriceValue: 4500,
    price: 4800,
    rent: 650 * 1 - 650,
    hired: 0,
    maxToHire: 4 * 1 - 4,
    employeesType: [
      { type: "Intern", amount: 0 },
      { type: "Barista", amount: 0 },
      { type: "Master Barista", amount: 0 },
    ],
    maxCoffeeCapacity: 8 * 1 - 8,
  },
  {
    name: "Luxury Shop",
    amount: 0,
    sellingPriceValue: 12300,
    price: 12500,
    rent: 4550 * 1 - 4550,
    hired: 0,
    maxToHire: 6 * 1 - 6,
    employeesType: [
      { type: "Intern", amount: 0 },
      { type: "Barista", amount: 0 },
      { type: "Master Barista", amount: 0 },
    ],
    maxCoffeeCapacity: 12 * 1 - 12,
  },
];

//! EMPLOYEES COSTS
export const employeesSalariesInfos = [
  { name: "intern", salary: 600 },
  { name: "barista", salary: 2200 },
  { name: "master", salary: 2800 },
];
