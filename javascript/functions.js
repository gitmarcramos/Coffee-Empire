import { coffees, generalFunds } from "./objects.js";
import { stocks } from "./objects.js";
import { shops } from "./objects.js";
import { employeesSalariesInfos } from "./objects.js";

//! SET COFFEES PRICE
export function raiseCoffeePrice(index) {
  if (index === 1) {
    coffees[0].price += 0.01;
  } else if (index === 3) {
    coffees[1].price += 0.01;
  } else if (index === 5) {
    coffees[2].price += 0.01;
  }
}

export function lowerCoffeePrice(index) {
  if (index === 0) {
    coffees[0].price -= 0.01;
  } else if (index === 2) {
    coffees[1].price -= 0.01;
  } else if (index === 4) {
    coffees[2].price -= 0.01;
  }
}

//! BUY COFFEE STOCKS
export function addStock(index) {
  if (index === 0) {
    stocks[0].quantity += 100;
  } else if (index === 2) {
    stocks[1].quantity += 100;
  } else if (index === 4) {
    stocks[2].quantity += 25;
  }
}

//! compute the cost per coffee
export const pricePerCoffee = function(object) {
  return object.buyingPrice / object.stockPerBag;
}

//! compute the benefits per coffee, according the coffee price set by user
const benefitsPerCoffee = function(object){

}

//! BUY SHOP
export function buyShop(index) {
  if (index === 1) {
    shops[0].amount += 1;
    shops[0].maxToHire += 2;
    shops[0].rent += 250;
    shops[0].maxCoffeeCapacity += 6;
    generalFunds.funds -= shops[0].price;
  } else if (index === 3) {
    shops[1].amount += 1;
    shops[1].maxToHire += 4;
    shops[1].rent += 650;
    shops[1].maxCoffeeCapacity += 8;
    generalFunds.funds -= shops[1].price;
  } else if (index === 5) {
    shops[2].amount += 1;
    shops[2].maxToHire += 6;
    shops[2].rent += 4550;
    shops[2].maxCoffeeCapacity += 12;
    generalFunds.funds -= shops[2].price;
  }
}

//! SELL SHOP
export function sellShop(index) {
  if (index === 0 && shops[0].amount > 0) {
    shops[0].amount -= 1;
    shops[0].maxToHire -= 2;
    shops[0].rent -= 250;
    shops[0].maxCoffeeCapacity -= 6;
  } else if (index === 2 && shops[1].amount > 0) {
    shops[1].amount -= 1;
    shops[1].maxToHire -= 4;
    shops[1].rent -= 650;
    shops[1].maxCoffeeCapacity -= 8;
  } else if (index === 4 && shops[2].amount > 0) {
    shops[2].amount -= 1;
    shops[2].maxToHire -= 6;
    shops[2].rent -= 4550;
    shops[2].maxCoffeeCapacity -= 12;
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

//! SUPER HUGE FUNCTION TO CALCULATE THE FUNDS!!!!
