import { coffees } from "./objects.js";
import { stocks } from "./objects.js";
import { shops, generalFunds } from "./objects.js";
import { calculateEmployeesCost, autoBuyBtn } from "./functions.js";


// //! MY COMPANY
// total funds
const companyFunds = document.querySelector('#company-funds_available');



//arrows
const allCompanyArrows = document.querySelectorAll(".company_infos_svg");
allCompanyArrows.forEach((arrow, index) => {
  // arrow.style.display = 'none';
});


//! COFFEES
//coffee price
const allCoffeesPrice = document.querySelectorAll(".company_coffee_price");

//set coffees price from the objects.js
allCoffeesPrice[0].innerText = coffees[0].price.toFixed(2);
allCoffeesPrice[1].innerText = coffees[1].price.toFixed(2);
allCoffeesPrice[2].innerText = coffees[2].price.toFixed(2);

function updatePrice() {
  allCoffeesPrice[0].innerText = coffees[0].price.toFixed(2);
  allCoffeesPrice[1].innerText = coffees[1].price.toFixed(2);
  allCoffeesPrice[2].innerText = coffees[2].price.toFixed(2);
}

//buttons
import {
  buyShop,
  raiseCoffeePrice,
  sellShop,
  lowerCoffeePrice,
} from "./functions.js";

const allCoffeesBtn = document.querySelectorAll(".set-coffee");
allCoffeesBtn.forEach((btn, index) => {
  if (btn.classList.contains("btn__low")) {
    btn.addEventListener("click", () => {
      lowerCoffeePrice(index);
      updatePrice();
    });
  } else if (btn.classList.contains("btn__raise")) {
    btn.addEventListener("click", () => {
      raiseCoffeePrice(index);
      updatePrice();
    });
  }
});

//! STOCKS
//coffees stock
const coffeesLeft = document.querySelectorAll(".coffees_stocks-left");
const myCompanyCoffeesStock = document.querySelector("#company-coffees-stock");
const stocksCoffeesPrice = document.querySelectorAll(".price.bodyText.bolder");
for (let i = 0; i < stocksCoffeesPrice.length; i++) {
  stocksCoffeesPrice[i].innerText = stocks[i].buyingPrice;
}

myCompanyCoffeesStock.innerText = 0;

coffeesLeft[0].innerText = stocks[0].quantity;
coffeesLeft[1].innerText = stocks[1].quantity;
coffeesLeft[2].innerText = stocks[2].quantity;

function updateStocks() {
  let countStocks = 0;

  coffeesLeft[0].innerText = stocks[0].quantity;
  coffeesLeft[1].innerText = stocks[1].quantity;
  coffeesLeft[2].innerText = stocks[2].quantity;

  stocks.forEach((stock) => {
    countStocks += stock.quantity;
  });

  myCompanyCoffeesStock.innerText = countStocks;
}

import { addStock, removeCoffeeStock } from "./functions.js";

//coffees stock buttons
const allCoffeesStockButtons = document.querySelectorAll(".coffees_stock_btn");

allCoffeesStockButtons.forEach((coffeeStockBtn, index) => {
  coffeeStockBtn.addEventListener("click", () => {
    if (coffeeStockBtn.classList.contains("btn__raise")) {
      addStock(index);
      updateStocks();
      generalFunds.funds -= stocks[index].buyingPrice;
    } else {
      //! NEED TO CREATE AUTOBUY BUTTON !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      autoBuyBtn(index);
      updateStocks();
    }
  });
});

//! SHOPS
// =================================================================
// number of shops
const shopsAmount = document.querySelectorAll(".this-shop-count");
for (let i = 0; i < shopsAmount.length; i++) {
  shopsAmount[i].innerText = shops[i].amount;
}

function updateShopdisplay() {
  for (let i = 0; i < shopsAmount.length; i++) {
    shopsAmount[i].innerText = shops[i].amount;
  }
}

// =================================================================
//shop price
const shopsPrice = document.querySelectorAll(".shop_price");
for (let i = 0; i < shopsPrice.length; i++) {
  shopsPrice[i].innerText = shops[i].price;
}

// =================================================================
//shop rent
const shopsRent = document.querySelectorAll(".shop_rent");
const companyShopsRent = document.querySelector("#company-rent_month");

for (let i = 0; i < shopsRent.length; i++) {
  shopsRent[i].innerText = `${shops[i].rent}`;
  companyShopsRent.innerText = Number(shops[i].rent);
}

function updateRent() {
  let totalRents = 0;
  for (let i = 0; i < shopsRent.length; i++) {
    shopsRent[i].innerText = `${shops[i].rent}`;
    totalRents += Number(shopsRent[i].innerText);
  }
  companyShopsRent.innerText = `${totalRents}`;
}

// =================================================================
//employees hired
import { calculateEmployeesHired } from "./functions.js";

const employeesHired = document.querySelectorAll(".employees_hired");
for (let i = 0; i < employeesHired.length; i++) {
  employeesHired[i].innerText = calculateEmployeesHired(i);
}
function updateEmployeesHired() {
  for (let i = 0; i < employeesHired.length; i++) {
    employeesHired[i].innerText = calculateEmployeesHired(i);
  }
}

//employees capacity
const employeesCapacity = document.querySelectorAll(".employees_capacity");
for (let i = 0; i < employeesCapacity.length; i++) {
  employeesCapacity[i].innerText = shops[i].maxToHire;
}

function updateMaxToHire() {
  for (let i = 0; i < employeesCapacity.length; i++) {
    employeesCapacity[i].innerText = shops[i].maxToHire;
  }
}

// =================================================================
// interns hired
const shopInterns = document.querySelectorAll(".display-shops-numbers-interns");
for (let i = 0; i < shopInterns.length; i++) {
  shopInterns[i].innerText = shops[i].employeesType[0].amount;
}
function updateIntern() {
  for (let i = 0; i < shopInterns.length; i++) {
    shopInterns[i].innerText = shops[i].employeesType[0].amount;
  }
}

// baristas hired
const shopBaristas = document.querySelectorAll(
  ".display-shops-numbers-baristas"
);
for (let i = 0; i < shopBaristas.length; i++) {
  shopBaristas[i].innerText = shops[i].employeesType[1].amount;
}
function updateBarista() {
  for (let i = 0; i < shopBaristas.length; i++) {
    shopBaristas[i].innerText = shops[i].employeesType[1].amount;
  }
}

//master barista hired
const shopMasterBaristas = document.querySelectorAll(
  ".display-shops-numbers-masters"
);
for (let i = 0; i < shopMasterBaristas.length; i++) {
  shopMasterBaristas[i].innerText = shops[i].employeesType[2].amount;
}
function updateMaster() {
  for (let i = 0; i < shopMasterBaristas.length; i++) {
    shopMasterBaristas[i].innerText = shops[i].employeesType[2].amount;
  }
}

// =================================================================
// employees cost

const employeesCost = document.querySelectorAll(".shop_employee_cost");
const myCompanyEmployeesCost = document.querySelector("#company-employee_cost");

for (let i = 0; i < employeesCost.length; i++) {
  employeesCost[i].innerText = calculateEmployeesCost(i);
  myCompanyEmployeesCost.innerText = 0;
}
function updateEmployeesCost() {
  let companyTotalEmployeesCost = 0;

  for (let i = 0; i < employeesCost.length; i++) {
    employeesCost[i].innerText = calculateEmployeesCost(i);
    companyTotalEmployeesCost += calculateEmployeesCost(i);
  }

  myCompanyEmployeesCost.innerText = companyTotalEmployeesCost;
}

// =================================================================
// coffees per hour

const coffeesPerHour = document.querySelectorAll(".shop_coffees_hour");
const companyAllCoffees = document.querySelector("#company-coffees-hour");

for (let i = 0; i < coffeesPerHour.length; i++) {
  if (i === 0 || i === 1) {
    coffeesPerHour[i].innerText = shops[i].hired * 6;
  } else if (i === 2) {
    coffeesPerHour[i].innerText = shops[i].hired * 3;
  }
  companyAllCoffees.innerText = shops[i].hired;
}

function updateCoffeesPerHour() {
  let totalCoffees = 0;

  for (let i = 0; i < coffeesPerHour.length; i++) {
    if (i === 0 || i === 1) {
      coffeesPerHour[i].innerText = shops[i].hired * 6;
      totalCoffees += shops[i].hired * 6;
    } else if (i === 2) {
      coffeesPerHour[i].innerText = shops[i].hired * 3;
      totalCoffees += shops[i].hired * 3;
    }
  }
  companyAllCoffees.innerText = totalCoffees;
}

//coffees max capacity
const coffeesCapacity = document.querySelectorAll(".shop_coffees_capacity");
for (let i = 0; i < coffeesCapacity.length; i++) {
  coffeesCapacity[i].innerText = shops[i].maxCoffeeCapacity;
}
function updateMaxCoffeeCapacity() {
  for (let i = 0; i < coffeesCapacity.length; i++) {
    coffeesCapacity[i].innerText = shops[i].maxCoffeeCapacity;
  }
}

// =================================================================
// SHOPS BUTTONS
// sell or buy

const sellBuyBtns = document.querySelectorAll(".sell__buy");
sellBuyBtns.forEach((sellBuyBtn, index) => {
  sellBuyBtn.addEventListener("click", () => {
    if (sellBuyBtn.classList.contains("sell__shop")) {
      sellShop(index);
      updateShopdisplay();
      updateMaxToHire();
      updateRent();
      updateCoffeesPerHour();
      updateMaxCoffeeCapacity();
      updateEmployeesHired()
    } else if (sellBuyBtn.classList.contains("buy__shop")) {
      buyShop(index);
      updateShopdisplay();
      updateMaxToHire();
      updateRent();
      updateCoffeesPerHour();
      updateMaxCoffeeCapacity();
      updateEmployeesHired()
    }
  });
});

//Interns
import { hireIntern } from "./functions.js";
import { fireIntern } from "./functions.js";
const fireInterns = document.querySelectorAll(".employee-fire__intern");
fireInterns.forEach((firedIntern, index) => {
  firedIntern.addEventListener("click", () => {
    fireIntern(index);
    updateIntern();
    calculateEmployeesCost(index);
    updateEmployeesCost();
    updateEmployeesHired();
    updateCoffeesPerHour();
  });
});
const hireInterns = document.querySelectorAll(".employee-hire__intern");
hireInterns.forEach((hiredIntern, index) => {
  hiredIntern.addEventListener("click", () => {
    hireIntern(index);
    updateIntern();
    calculateEmployeesCost(index);
    updateEmployeesCost();
    updateEmployeesHired();
    updateCoffeesPerHour();
  });
});

// Baristas
import { hireBarista, fireBarista } from "./functions.js";
const fireBaristas = document.querySelectorAll(".employee-fire__barista");
fireBaristas.forEach((firedBarista, index) => {
  firedBarista.addEventListener("click", () => {
    fireBarista(index);
    updateBarista();
    calculateEmployeesCost(index);
    updateEmployeesCost();
    updateEmployeesHired();
    updateCoffeesPerHour();
  });
});
const hireBaristas = document.querySelectorAll(".employee-hire__barista");
hireBaristas.forEach((hiredBarista, index) => {
  hiredBarista.addEventListener("click", () => {
    hireBarista(index);
    updateBarista();
    calculateEmployeesCost(index);
    updateEmployeesCost();
    updateEmployeesHired();
    updateCoffeesPerHour();
  });
});

// Master Barista
import { hireMaster, fireMaster } from "./functions.js";
const fireMasters = document.querySelectorAll(".employee-fire__master");
fireMasters.forEach((firedMaster, index) => {
  firedMaster.addEventListener("click", () => {
    fireMaster(index);
    updateMaster();
    calculateEmployeesCost(index);
    updateEmployeesCost();
    updateEmployeesHired();
    updateCoffeesPerHour();
  });
});
const hireMasters = document.querySelectorAll(".employee-hire__master");
hireMasters.forEach((hiredMaster, index) => {
  hiredMaster.addEventListener("click", () => {
    hireMaster(index);
    updateMaster();
    calculateEmployeesCost(index);
    updateEmployeesCost();
    updateEmployeesHired();
    updateCoffeesPerHour();
  });
});

//! SALARIES
import { computeSalaries } from "./functions.js";
import { employeesSalariesInfos } from "./objects.js";

const internsSalary = document.querySelector("#salary__intern");
const baristasSalary = document.querySelector("#salary__barista");
const mastersSalary = document.querySelector("#salary__master");

internsSalary.innerText = employeesSalariesInfos[0].salary;
baristasSalary.innerText = employeesSalariesInfos[1].salary;
mastersSalary.innerText = employeesSalariesInfos[2].salary;

function updateSalary() {
  internsSalary.innerText = employeesSalariesInfos[0].salary;
  baristasSalary.innerText = employeesSalariesInfos[1].salary;
  mastersSalary.innerText = employeesSalariesInfos[2].salary;
}

const setSalaries = document.querySelectorAll(".salary.btn");
setSalaries.forEach((salaryBtn, index) => {
  if (salaryBtn.classList.contains("btn__low")) {
    salaryBtn.addEventListener("click", () => {
      computeSalaries(index);
      updateSalary();
      updateEmployeesCost();
    });
  } else if (salaryBtn.classList.contains("btn__raise")) {
    salaryBtn.addEventListener("click", () => {
      computeSalaries(index);
      updateSalary();
      updateEmployeesCost();
    });
  }
});


