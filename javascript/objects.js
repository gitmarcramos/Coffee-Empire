//! TOTAL FUNDS
export const generalFunds = {
  funds: 0,
};

let music = new Audio("/assets/music/beat.mp3");
music.addEventListener("canplaythrough", () => {
  music.play()
});

//! =====> for game start
function startGame() {
  const startFunds = (document.querySelector(
    "#company-funds_available"
  ).innerText = 10000);
  generalFunds.funds += 10000;
}
startGame();

//! COFFEES
export const coffees = [
  { type: "regular", price: 2, clientSatisfaction: 10 },
  { type: "organic", price: 2.2, clientSatisfaction: 30 },
  { type: "rare", price: 2.5, clientSatisfaction: 50 },
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
    buyingPrice: 30,
    quantity: 0,
    clientSatisfaction: 10,
    stockPerBag: 1000,
    isAutoBuy: false,
  },
  {
    name: "organic",
    buyingPrice: 50,
    quantity: 0,
    clientSatisfaction: 30,
    stockPerBag: 1000,
    isAutoBuy: false,
  },
  {
    name: "rare",
    buyingPrice: 40,
    quantity: 0,
    clientSatisfaction: 50,
    stockPerBag: 250,
    isAutoBuy: false,
  },
];

//! SHOPS
export const shops = [
  {
    name: "Tiny Shop",
    amount: 0,
    sellingPriceValue: 1000,
    price: 1200,
    rent: 50 * 1 - 50,
    hired: 0,
    maxToHire: 2 * 1 - 2,
    employeesType: [
      { type: "Intern", amount: 0 },
      { type: "Barista", amount: 0 },
      { type: "Master Barista", amount: 0 },
    ],
    maxCoffeeCapacity: 12 * 1 - 12,
  },
  {
    name: "Barista Shop",
    amount: 0,
    sellingPriceValue: 2000,
    price: 2200,
    rent: 100 * 1 - 100,
    hired: 0,
    maxToHire: 4 * 1 - 4,
    employeesType: [
      { type: "Intern", amount: 0 },
      { type: "Barista", amount: 0 },
      { type: "Master Barista", amount: 0 },
    ],
    maxCoffeeCapacity: 24 * 1 - 24,
  },
  {
    name: "Luxury Shop",
    amount: 0,
    sellingPriceValue: 5000,
    price: 5500,
    rent: 150 * 1 - 150,
    hired: 0,
    maxToHire: 6 * 1 - 6,
    employeesType: [
      { type: "Intern", amount: 0 },
      { type: "Barista", amount: 0 },
      { type: "Master Barista", amount: 0 },
    ],
    maxCoffeeCapacity: 24 * 1 - 24,
  },
];

//! EMPLOYEES COSTS
export const employeesSalariesInfos = [
  { name: "intern", salary: 100 },
  { name: "barista", salary: 300 },
  { name: "master", salary: 400 },
];
