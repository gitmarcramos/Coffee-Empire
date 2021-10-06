import { shops, stocks, generalFunds } from "./objects.js";

//! =====> for game start
function startGame() {
  const startFunds = (document.querySelector(
    "#company-funds_available"
  ).innerText = 10000);
  generalFunds.funds += 10000;
}
startGame();

const actualState = {};

function refresh(object) {
  // total funds
  actualState.stateFundsAvailable = Number(
    document.querySelector("#company-funds_available").innerText
  );

  // average revenu
  actualState.stateAverageRevenuHour = Number(
    document.querySelector("#company-average_revenue_hour").innerText
  );

  // coffees per hour
  actualState.stateCoffeesPerHour = Number(
    document.querySelector("#company-coffees-hour").innerText
  );

  // rent per month
  actualState.stateRentPerMonth = Number(
    document.querySelector("#company-rent_month").innerText
  );

  // employees cost per month
  actualState.stateEmployeesCostPerMonth = Number(
    document.querySelector("#company-employee_cost").innerText
  );

  // regular coffee price
  actualState.stateRegularCoffeePrice = Number(
    document.querySelector("#regular-coffee-price").innerText
  );

  // premium coffee price
  actualState.statePremiumCoffeePrice = Number(
    document.querySelector("#premium-coffee-price").innerText
  );

  // rare coffee price
  actualState.stateRareCoffeePrice = Number(
    document.querySelector("#rare-coffee-price").innerText
  );

  // total stocks (company cards)
  actualState.stateTotalStock = Number(
    document.querySelector("#company-coffees-stock").innerText
  );

  // regular coffee stocks
  actualState.stateRegularCoffeeStock = Number(
    document.querySelector("#regular-coffees-left ").innerText
  );
  //====> update regular stock
  if (actualState.stateRegularCoffeeStock > 0) {
    stocks[0].quantity -= actualState.stateCoffeesPerHour;
    document.querySelector("#regular-coffees-left").classList.remove("danger");
    document.querySelector("#company-coffees-stock").classList.remove("danger");
    document.querySelector("#regular-coffees-left ").innerText =
      stocks[0].quantity;
  } else {
    document.querySelector("#company-coffees-stock").innerText = 0;
    document.querySelector("#regular-coffees-left ").innerText = 0;
    document.querySelector("#regular-coffees-left ").classList.add("danger");
    document.querySelector("#company-coffees-stock").classList.add("danger");
  }

  // premium coffee stocks
  actualState.statePremiumCoffeeStock = Number(
    document.querySelector("#premium-coffees-left").innerText
  );
  //====> update premium stock
  if (actualState.statePremiumCoffeeStock > 0) {
    stocks[1].quantity -= actualState.stateCoffeesPerHour;
    document.querySelector("#premium-coffees-left").classList.remove("danger");
    document.querySelector("#company-coffees-stock").classList.remove("danger");
    document.querySelector("#premium-coffees-left ").innerText =
      stocks[1].quantity;
  } else {
    document.querySelector("#company-coffees-stock").innerText = 0;
    document.querySelector("#premium-coffees-left ").innerText = 0;
    document.querySelector("#premium-coffees-left ").classList.add("danger");
    document.querySelector("#company-coffees-stock").classList.add("danger");
  }

  document.querySelector("#company-coffees-stock").innerText =
    stocks[0].quantity + stocks[1].quantity + stocks[2].quantity;

  // rare coffee stocks
  actualState.stateRareCoffeeStock = Number(
    document.querySelector("#rare-coffees-left").innerText
  );

  // tinyshop total
  actualState.stateTinyShopAmount = Number(
    document.querySelector("#tiny-shop-total").innerText
  );
  if (actualState.stateTinyShopAmount != 0) {
    document.querySelector("#tiny-shop-total").classList.remove("danger");
  } else {
    document.querySelector("#tiny-shop-total").classList.add("danger");
    // document.querySelector('#tiny-shop-employees-hired').innerText = 0;
    // document.querySelector('#tiny-shop-total-intern').innerText = 0;
  }

  // barista shop total
  actualState.stateBaristaShopAmount = Number(
    document.querySelector("#barista-shop-total").innerText
  );
  if (actualState.stateBaristaShopAmount != 0) {
    document.querySelector("#barista-shop-total").classList.remove("danger");
  } else {
    document.querySelector("#barista-shop-total").classList.add("danger");
    // document.querySelector('#barista-shop-employees-hired').innerText = 0;
    // document.querySelector('#barista-shop-total-intern').innerText = 0;
  }

  // =================== CALCULATE EXPENSES =================== //

  //Calculate rent per day
  const rentPerDay = function calculateRentPerDay() {
    return Number((actualState.stateRentPerMonth / 30).toFixed(2));
  };

  //Calculate employees cost per day
  const employeesCostPerDay = function calculateEmployeesCostPerDay() {
    return Number((actualState.stateEmployeesCostPerMonth / 30).toFixed(2));
  };

  // Calculate cost per coffee
  function calculatePricePerCoffee(type) {
    return type.buyingPrice / type.stockPerBag;
  }
  let regularPricePerCoffee = calculatePricePerCoffee(stocks[0]);
  let premiumPricePerCoffee = calculatePricePerCoffee(stocks[1]);
  let rarePricePerCoffee = calculatePricePerCoffee(stocks[2]);

  generalFunds.funds -= rentPerDay();
  generalFunds.funds -= employeesCostPerDay();

  //=====>>> updates the general funds with expenses
  if (document.querySelector("#company-funds_available").innerText > 0) {
    document.querySelector("#company-funds_available").innerText =
      generalFunds.funds.toFixed(2);
  } else {
    document.querySelector("#company-funds_available").innerText = 0;
  }

  // =================== CALCULATE INCOMES =================== //

  // calculate benefits per coffee
  function calculateBenefitsPerCoffee(cost, sellPrice) {
    return sellPrice - cost;
  }

  let regCoffeeBenefits = calculateBenefitsPerCoffee(
    regularPricePerCoffee,
    actualState.stateRegularCoffeePrice
  );
  let premCoffeeBenefits = calculateBenefitsPerCoffee(
    premiumPricePerCoffee,
    actualState.statePremiumCoffeePrice
  );
  let rareCoffeeBenefits = calculateBenefitsPerCoffee(
    rarePricePerCoffee,
    actualState.stateRareCoffeePrice
  );

  // calculate the total coffees benefits
  let totalCoffeesBenefits = Number(
    (regCoffeeBenefits + premCoffeeBenefits + rareCoffeeBenefits).toFixed(2)
  );

  console.log(totalCoffeesBenefits);
}

//! ============================ To Start the interval =========================== //
const clearId = setInterval(() => refresh(actualState), 100);
