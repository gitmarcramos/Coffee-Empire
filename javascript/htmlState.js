import {
  shops,
  stocks,
  generalFunds,
  coffees,
  employeesSalariesInfos,
} from "./objects.js";
import { calculateEmployeesHired } from "./functions.js";

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
  if(actualState.stateAverageRevenuHour <= 0){
    document.querySelector("#company-average_revenue_hour").classList.add('danger')
  } else {
    document.querySelector("#company-average_revenue_hour").classList.remove('danger')
  }

  // coffees per hour / production capacity
  actualState.stateCoffeesPerHour = Number(
    document.querySelector("#company-coffees-hour").innerText
  );
  if(actualState.stateCoffeesPerHour <= 0){
    document.querySelector("#company-coffees-hour").classList.add('danger')
  } else {
    document.querySelector("#company-coffees-hour").classList.remove('danger')
  }

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
  // TODO add conditions avec remainder pour ne pas que aller en dessous de ZERO
  if (actualState.stateRegularCoffeeStock > 0) {
    stocks[0].quantity -= actualState.stateCoffeesPerHour;
    document.querySelector("#regular-coffees-left").classList.remove("danger");
    document.querySelector("#regular-coffees-left ").innerText =
      stocks[0].quantity;
  } else {
    document.querySelector("#regular-coffees-left ").innerText = 0;
    document.querySelector("#regular-coffees-left ").classList.add("danger");
  }

  // premium coffee stocks
  actualState.statePremiumCoffeeStock = Number(
    document.querySelector("#premium-coffees-left").innerText
  );
  //====> update premium stock
  if (actualState.statePremiumCoffeeStock > 0) {
    stocks[1].quantity -= actualState.stateCoffeesPerHour;
    document.querySelector("#premium-coffees-left").classList.remove("danger");
    document.querySelector("#premium-coffees-left ").innerText =
      stocks[1].quantity;
  } else {
    document.querySelector("#premium-coffees-left ").innerText = 0;
    document.querySelector("#premium-coffees-left ").classList.add("danger");
  }

  // rare coffee stocks
  actualState.stateRareCoffeeStock = Number(
    document.querySelector("#rare-coffees-left").innerText
  );
  //====> update rare stock
  if (actualState.stateRareCoffeeStock > 0) {
    stocks[2].quantity -= actualState.stateCoffeesPerHour;
    document.querySelector("#rare-coffees-left").classList.remove("danger");
    document.querySelector("#rare-coffees-left ").innerText =
      stocks[2].quantity;
  } else {
    document.querySelector("#rare-coffees-left ").innerText = 0;
    document.querySelector("#rare-coffees-left ").classList.add("danger");
  }

  // Autobuy BTN state
  //   if (stocks[0].isAutoBuy === true) {
  //     stocks[0].quantity += 100;
  //     generalFunds.funds -= stocks[0].buyingPrice;
  //     document.querySelector("#regular-coffees-left").innerText = "∞"
  //   } else if(stocks[1].isAutoBuy === true){
  //     stocks[1].quantity += 100;
  //     generalFunds.funds -= stocks[1].buyingPrice;
  //     document.querySelector("#premium-coffees-left").innerText = "∞"
  //   } else if(stocks[2].isAutoBuy === true){
  //     stocks[2].quantity += 25;
  //     generalFunds.funds -= stocks[2].buyingPrice;
  //     document.querySelector("#rare-coffees-left").innerText = "∞"
  //   }

  const autoBuyOff = document.querySelectorAll(".autobuy");
  autoBuyOff.forEach((btn) => {
    btn.style.display = "none";
  });

  // Update the total coffee stock in dashboard
  document.querySelector("#company-coffees-stock").innerText =
    stocks[0].quantity + stocks[1].quantity + stocks[2].quantity;

  // add/remove danger class
  if (
    Number(document.querySelector("#company-coffees-stock").innerText) !== 0
  ) {
    document.querySelector("#company-coffees-stock").classList.remove("danger");
  } else {
    document.querySelector("#company-coffees-stock").classList.add("danger");
  }

  // tinyshop total
  actualState.stateTinyShopAmount = Number(
    document.querySelector("#tiny-shop-total").innerText
  );
  if (actualState.stateTinyShopAmount != 0) {
    document.querySelector("#tiny-shop-total").classList.remove("danger");
  } else {
    document.querySelector("#tiny-shop-total").classList.add("danger");
  }

  // barista shop total
  actualState.stateBaristaShopAmount = Number(
    document.querySelector("#barista-shop-total").innerText
  );
  if (actualState.stateBaristaShopAmount != 0) {
    document.querySelector("#barista-shop-total").classList.remove("danger");
  } else {
    document.querySelector("#barista-shop-total").classList.add("danger");
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

  const coffeesBenefitsArray = [
    regCoffeeBenefits,
    premCoffeeBenefits,
    rareCoffeeBenefits,
  ];

  // ====> calculate the total coffees benefits
  // first we find the capacity production for each coffee type, then calculate the benefits for each type according to its production

  let regCoffeesProducted = 0;
  let premiumCoffeesProducted = 0;
  let rareCoffeesProducted = 0;

  if (actualState.stateTotalStock <= actualState.stateCoffeesPerHour) {
    regCoffeesProducted = actualState.stateRegularCoffeeStock;
    premiumCoffeesProducted = actualState.statePremiumCoffeeStock;
    rareCoffeesProducted = actualState.stateRareCoffeeStock;
  } else {
    regCoffeesProducted =
      (actualState.stateRegularCoffeeStock / actualState.stateTotalStock) *
      actualState.stateCoffeesPerHour;

    premiumCoffeesProducted =
      (actualState.statePremiumCoffeeStock / actualState.stateTotalStock) *
      actualState.stateCoffeesPerHour;

    rareCoffeesProducted =
      (actualState.stateRareCoffeeStock / actualState.stateTotalStock) *
      actualState.stateCoffeesPerHour;
  }

  //=====> now we calculate the benefits
  let regularCoffeesBenefitsAfterSale = regCoffeesProducted * regCoffeeBenefits * 1;

  let premiumCoffeesBenefitsAfterSale =
    premiumCoffeesProducted * premCoffeeBenefits * 1;

  let rareCoffeesBenefitsAfterSale = rareCoffeesProducted * rareCoffeeBenefits * 1;

  generalFunds.funds +=
    regularCoffeesBenefitsAfterSale +
    premiumCoffeesBenefitsAfterSale +
    rareCoffeesBenefitsAfterSale;



    if (generalFunds.funds < 0){
        generalFunds.funds = 0;
    }


  // =============> COMPUTE PROFITS <================
  let allInternsHired = document.querySelectorAll(
    ".bodyText.display-shops-numbers-interns"
  );
  let allBaristasHired = document.querySelectorAll(
    ".display-shops-numbers-baristas"
  );
  let allMastersHired = document.querySelectorAll(
    ".display-shops-numbers-masters"
  );

  let internsCost =
    (Number(allInternsHired[0].innerText) +
      Number(allInternsHired[1].innerText) +
      Number(allInternsHired[2].innerText)) *
    employeesSalariesInfos[0].salary;

  let baristasCost =
    (Number(allBaristasHired[0].innerText) +
      Number(allBaristasHired[1].innerText) +
      Number(allBaristasHired[2].innerText)) *
    employeesSalariesInfos[1].salary;

  let masterCost =
    (Number(allMastersHired[0].innerText) +
      Number(allMastersHired[1].innerText) +
      Number(allMastersHired[2].innerText)) *
    employeesSalariesInfos[2].salary;

  let totalEmployeesCost = internsCost + baristasCost + masterCost;

  let averageRevenuePerHour =
    regularCoffeesBenefitsAfterSale +
    premiumCoffeesBenefitsAfterSale +
    rareCoffeesBenefitsAfterSale -
    (totalEmployeesCost -
    shops[0].rent -
    shops[1].rent -
    shops[2].rent)/30;

    // console.log(regularCoffeesBenefitsAfterSale)

    document.querySelector("#company-average_revenue_hour").innerText = Number(averageRevenuePerHour.toFixed(2))

  // ====> able or disable the shop cards if not enough money
  const shopsCards = document.querySelectorAll(".card.scroll-card.my-shops");

  for (let i = 0; i < shopsCards.length; i++) {
    if (generalFunds.funds < shops[i].price) {
      shopsCards[i].classList.add("disabled-card");
    } else {
      shopsCards[i].classList.remove("disabled-card");
    }
  }

  // ====> able or disable the coffee cards if no stocks
  const coffeeCards = document.querySelectorAll(".coffee-card");

  for (let i = 0; i < stocks.length; i++) {
    if (stocks[i].quantity <= 0) {
      coffeeCards[i].classList.add("disabled-card");
    } else {
      coffeeCards[i].classList.remove("disabled-card");
    }
  }

  // ========> able or disable the buy stocks if no money
  const stockCards = document.querySelectorAll(".coffee-stocks");
  for (let i = 0; i < stockCards.length; i++) {
    if (generalFunds.funds <= 0) {
      stockCards[i].classList.add("disabled-card");
    } else {
      stockCards[i].classList.remove("disabled-card");
    }
  }

  //======> able / disable AUTOBUY btns
  const autoBuy = document.querySelectorAll(".autobuy");

  // for Regular
  if (generalFunds.funds <= 3000) {
    autoBuy[0].classList.add("disabled-btn");
  } else {
    autoBuy[0].classList.remove("disabled-btn");
  }

  // for Premium
  if (generalFunds.funds <= 9000) {
    autoBuy[1].classList.add("disabled-btn");
  } else {
    autoBuy[1].classList.remove("disabled-btn");
  }

  // for Rare
  if (generalFunds.funds <= 12000) {
    autoBuy[2].classList.add("disabled-btn");
  } else {
    autoBuy[2].classList.remove("disabled-btn");
  }


  // console.log(generalFunds.funds)
}

//! ============================ To Start the interval =========================== //
const clearId = setInterval(() => refresh(actualState), 100);
