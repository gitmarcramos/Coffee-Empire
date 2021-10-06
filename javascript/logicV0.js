//! Coffees
const coffees = [
  { type: "regular", price: 1, clientSatisfaction: 10 },
  { type: "organic", price: 1.2, clientSatisfaction: 30 },
  { type: "rare", price: 1.5, clientSatisfaction: 50 },
];

let clientSatisfaction = 50;

const stocks = [
  {
    name: "regular",
    buyingPrice: 3,
    quantity: 100,
    clientSatisfaction: 10,
  },
  {
    name: "organic",
    buyingPrice: 5,
    quantity: 100,
    clientSatisfaction: 30,
  },
  {
    name: "rare",
    buyingPrice: 4,
    quantity: 25,
    clientSatisfaction: 50,
  },
];

const shops = [
  {
    name: "Tiny Shop",
    amount: 1,
    sellingPriceValue: 0,
    price: 3200,
    rent: 250,
    hired: 0,
    maxToHire: 2,
    employeesType: [
      { type: "Intern", amount: 1 },
      { type: "Barista", amount: 0 },
      { type: "Master Barista", amount: 0 },
    ],
  },
  {
    name: "Barista Shop",
    amount: 0,
    sellingPriceValue: 20,
    price: 4800,
    rent: 650,
    hired: 0,
    maxToHire: 4,
    employeesType: [
      { type: "Intern", amount: 0 },
      { type: "Barista", amount: 0 },
      { type: "Master Barista", amount: 0 },
    ],
  },
  {
    name: "Luxury Shop",
    amount: 0,
    sellingPriceValue: 50,
    price: 12500,
    rent: 4550,
    hired: 0,
    maxToHire: 6,
    employeesType: [
      { type: "Intern", amount: 0 },
      { type: "Barista", amount: 0 },
      { type: "Master Barista", amount: 0 },
    ],
  },
];

//! SET COFFEE PRICE
const setCoffeePriceButtons = document.querySelectorAll(".set-coffee");

// check if the button is to lower or raise and addEventListner
setCoffeePriceButtons.forEach((button) => {
  if (button.textContent === "Lower") {
    button.addEventListener("click", lowerPrice);
  } else if (button.textContent === "Raise") {
    button.addEventListener("click", raisePrice);
  }
});

function updatePrice() {
  const displayedCoffeePrice = document.querySelectorAll(".price.title");
  displayedCoffeePrice.forEach((price, index) => {
    // price.innerText = coffees[index].price.toFixed(2);
    price.innerText =
      Math.round((coffees[index].price + Number.EPSILON) * 100) / 100;
  });
}

function lowerPrice() {
  if (coffees[0].price > 0 && coffees[0].price != 1.0408340855860843e-17) {
    if (this.classList.contains("regular-coffee")) {
      coffees[0].price -= 0.01;
      updatePrice();
    } else if (this.classList.contains("premium-coffee")) {
      coffees[1].price -= 0.01;
      updatePrice();
    } else if (this.classList.contains("rare-coffee")) {
      coffees[2].price -= 0.01;
      updatePrice();
    }
  } else {
    coffees[0].price = 0;
    updatePrice();
  }



  // if (coffees[0].price < 0.8) {
  //   if (clientSatisfaction >= 100) {
  //     clientSatisfaction = 100;
  //   } else {
  //     clientSatisfaction += 1;
  //   }
  // }
  // console.log(clientSatisfaction);
}

function raisePrice() {
  if (this.classList.contains("regular-coffee")) {
    coffees[0].price += 0.01;
    updatePrice();
  } else if (this.classList.contains("premium-coffee")) {
    coffees[1].price += 0.01;
    updatePrice();
  } else if (this.classList.contains("rare-coffee")) {
    coffees[2].price += 0.01;
    updatePrice();
  }
}

//! ADD EMPLOYEE TO SPECIFIC SHOP
function addEmployee(shopType, employeeType) {
  // for Tiny Shop
  if (shopType === "Tiny Shop" && employeeType === "Intern") {
    shops[0].employeesType[0].amount++;
  } else if (shopType === "Tiny Shop" && employeeType === "Barista") {
    shops[0].employeesType[1].amount++;
  } else if (shopType === "Tiny Shop" && employeeType === "Master Barista") {
    shops[0].employeesType[2].amount++;
  }

  // For Barista Shop
  if (shopType === "Barista Shop" && employeeType === "Intern") {
    shops[1].employeesType[0].amount++;
  } else if (shopType === "Barista Shop" && employeeType === "Barista") {
    shops[1].employeesType[1].amount++;
  } else if (shopType === "Barista Shop" && employeeType === "Master Barista") {
    shops[1].employeesType[2].amount++;
  }

  // For Luxury Shop
  if (shopType === "Luxury Shop" && employeeType === "Intern") {
    shops[2].employeesType[0].amount++;
  } else if (shopType === "Luxury Shop" && employeeType === "Barista") {
    shops[2].employeesType[1].amount++;
  } else if (shopType === "Luxury Shop" && employeeType === "Master Barista") {
    shops[2].employeesType[2].amount++;
  }
}
