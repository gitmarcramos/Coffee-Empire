import { coffees, generalFunds } from "./objects.js";
import { stocks } from "./objects.js";
import { shops } from "./objects.js";
import { employeesSalariesInfos } from "./objects.js";

//! SET COFFEES PRICE
export function raiseCoffeePrice(index) {
  if (index === 1) {
    coffees[0].price += 0.1;
  } else if (index === 3) {
    coffees[1].price += 0.1;
  } else if (index === 5) {
    coffees[2].price += 0.1;
  }
}

export function lowerCoffeePrice(index) {
  if (index === 0) {
    coffees[0].price -= 0.1;
  } else if (index === 2) {
    coffees[1].price -= 0.1;
  } else if (index === 4) {
    coffees[2].price -= 0.1;
  }
}

//! BUY COFFEE STOCKS
export function addStock(index) {
  if (index === 0) {
    stocks[0].quantity += 1000;
  } else if (index === 2) {
    stocks[1].quantity += 1000;
  } else if (index === 4) {
    stocks[2].quantity += 250;
  }
}

//! AUTO BUY
export function autoBuyBtn(index) {
  const stockBtns = document.querySelectorAll(".coffees_stock_btn");
  const coffeeProduction = document.querySelector('#company-coffees-hour');

  if (index === 1 && Number(coffeeProduction.innerText) > 0) {
    stockBtns[0].classList.add("disabled-btn");
    generalFunds.funds -= 3000;
    stocks[0].isAutoBuy = true;
  }
  else if (index === 3) {
    stockBtns[1].classList.add("disabled-btn");
    generalFunds.funds -= 9000;
    stocks[1].isAutoBuy = true;
  }
  else if (index === 5) {
    stockBtns[2].classList.add("disabled-btn");
    generalFunds.funds -= 12000;
    stocks[2].isAutoBuy = true;
  } 
}

//! compute the cost per coffee
export const pricePerCoffee = function (object) {
  return object.buyingPrice / object.stockPerBag;
};

//! BUY SHOP
export function buyShop(index) {
  if (index === 1 && generalFunds.funds > shops[0].price) {
    shops[0].amount += 1;
    shops[0].maxToHire += 2;
    shops[0].rent += 50;
    shops[0].maxCoffeeCapacity += 12;
    generalFunds.funds -= shops[0].price;
  }
  if (index === 3 && generalFunds.funds > shops[1].price) {
    shops[1].amount += 1;
    shops[1].maxToHire += 4;
    shops[1].rent += 100;
    shops[1].maxCoffeeCapacity += 18;
    generalFunds.funds -= shops[1].price;
  } else if (index === 5 && generalFunds.funds > shops[2].price) {
    shops[2].amount += 1;
    shops[2].maxToHire += 6;
    shops[2].rent += 150;
    shops[2].maxCoffeeCapacity += 24;
    generalFunds.funds -= shops[2].price;
  }
}

//! SELL SHOP
export function sellShop(index) {
  if (index === 0 && shops[0].amount > 0) {
    shops[0].amount -= 1;
    shops[0].maxToHire -= 2;
    shops[0].rent -= 50;
    shops[0].maxCoffeeCapacity -= 12;
    generalFunds.funds += shops[0].sellingPriceValue;
  } else if (index === 2 && shops[1].amount > 0) {
    shops[1].amount -= 1;
    shops[1].maxToHire -= 4;
    shops[1].rent -= 100;
    shops[1].maxCoffeeCapacity -= 18;
    generalFunds.funds += shops[1].sellingPriceValue;
  } else if (index === 4 && shops[2].amount > 0) {
    shops[2].amount -= 1;
    shops[2].maxToHire -= 6;
    shops[2].rent -= 150;
    shops[2].maxCoffeeCapacity -= 24;
    generalFunds.funds += shops[2].sellingPriceValue;
  }
}

//! CALCULATE EMPLOYEES HIRED
export function calculateEmployeesHired(index) {
  let employeesHired = 0;

  shops[index].employeesType.forEach((employee) => {
    employeesHired += employee.amount;
  });

  return employeesHired;
}

//! HIRE INTERNS
export function hireIntern(index) {
  if (shops[index].hired < shops[index].maxToHire) {
    if (index === 0 && shops[index].amount != 0) {
      shops[0].employeesType[0].amount++;
      shops[index].hired++;
    } else if (index === 1 && shops[index].amount != 0) {
      shops[1].employeesType[0].amount++;
      shops[index].hired++;
    } else if (index === 2 && shops[index].amount != 0) {
      shops[2].employeesType[0].amount++;
      shops[index].hired++;
    }
  }
}

//! FIRE INTERNS
export function fireIntern(index) {
  if (index === 0 && shops[0].employeesType[0].amount > 0) {
    shops[0].employeesType[0].amount--;
    shops[index].hired--;
  } else if (index === 1 && shops[1].employeesType[0].amount > 0) {
    shops[1].employeesType[0].amount--;
    shops[index].hired--;
  } else if (index === 2 && shops[2].employeesType[0].amount > 0) {
    shops[2].employeesType[0].amount--;
    shops[index].hired--;
  }
}

//! HIRE BARISTAS
export function hireBarista(index) {
  if (shops[index].hired < shops[index].maxToHire) {
    if (index === 0 && shops[index].amount != 0) {
      shops[0].employeesType[1].amount++;
      shops[index].hired++;
    } else if (index === 1 && shops[index].amount != 0) {
      shops[1].employeesType[1].amount++;
      shops[index].hired++;
    } else if (index === 2 && shops[index].amount != 0) {
      shops[2].employeesType[1].amount++;
      shops[index].hired++;
    }
  }
}

//! FIRE BARISTAS
export function fireBarista(index) {
  if (index === 0 && shops[0].employeesType[1].amount > 0) {
    shops[0].employeesType[1].amount--;
    shops[index].hired--;
  } else if (index === 1 && shops[1].employeesType[1].amount > 0) {
    shops[1].employeesType[1].amount--;
    shops[index].hired--;
  } else if (index === 2 && shops[2].employeesType[1].amount > 0) {
    shops[2].employeesType[1].amount--;
    shops[index].hired--;
  }
}

//! HIRE MASTERS
export function hireMaster(index) {
  if (shops[index].hired < shops[index].maxToHire) {
    if (index === 0 && shops[index].amount != 0) {
      shops[0].employeesType[2].amount++;
      shops[index].hired++;
    } else if (index === 1 && shops[index].amount != 0) {
      shops[1].employeesType[2].amount++;
      shops[index].hired++;
    } else if (index === 2 && shops[index].amount != 0) {
      shops[2].employeesType[2].amount++;
      shops[index].hired++;
    }
  }
}

//! FIRE MASTER
export function fireMaster(index) {
  if (index === 0 && shops[0].employeesType[2].amount > 0) {
    shops[0].employeesType[2].amount--;
    shops[index].hired--;
  } else if (index === 1 && shops[1].employeesType[2].amount > 0) {
    shops[1].employeesType[2].amount--;
    shops[index].hired--;
  } else if (index === 2 && shops[2].employeesType[2].amount > 0) {
    shops[2].employeesType[2].amount--;
    shops[index].hired--;
  }
}

//! CALCULATE EMPLOYEES COST
export function calculateEmployeesCost(index) {
  let internsTotal =
    shops[index].employeesType[0].amount * employeesSalariesInfos[0].salary;

  let baristasTotal =
    shops[index].employeesType[1].amount * employeesSalariesInfos[1].salary;

  let mastersTotal =
    shops[index].employeesType[2].amount * employeesSalariesInfos[2].salary;

  let employeesTotal = internsTotal + baristasTotal + mastersTotal;

  return employeesTotal;
}

//! UPDATE SALARIES
export function computeSalaries(index) {
  // RAISE SALARIES
  if (index === 1) {
    employeesSalariesInfos[0].salary += 10;
  } else if (index === 3) {
    employeesSalariesInfos[1].salary += 10;
  } else if (index === 5) {
    employeesSalariesInfos[2].salary += 10;
  }

  //LOWER SALARIES
  if (index === 0 && employeesSalariesInfos[0].salary > 0) {
    employeesSalariesInfos[0].salary -= 10;
  } else if (index === 2 && employeesSalariesInfos[1].salary > 0) {
    employeesSalariesInfos[1].salary -= 10;
  } else if (index === 4 && employeesSalariesInfos[2].salary > 0) {
    employeesSalariesInfos[2].salary -= 10;
  }
}

export function removeCoffeeStock(totalCoffees, coffeesPerHour) {
  return (totalCoffees -= coffeesPerHour);
}
