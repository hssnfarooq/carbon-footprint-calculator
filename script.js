var form = document.getElementById("form");
var car = document.getElementById("car");
var carType = document.getElementById("car-type");
var fuelType = document.getElementById("fuel-type");
var electricity = document.getElementById("electricity");
var gas = document.getElementById("gas");
var naturalGas = document.getElementById("natural-gas");
var lpg = document.getElementById("lpg");
var coal = document.getElementById("coal");
var heatingOil = document.getElementById("heating-oil");
var wood = document.getElementById("wood");
var bus = document.getElementById("bus");
var motorbyke = document.getElementById("motorbyke");
var tube = document.getElementById("tube");
var airplaneDomestic = document.getElementById("airplane-domestic");
var airplaneInternational = document.getElementById("airplane-international");
var result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var total = 0;

  // value should be a number or float number and not string or empty
  if (
    isNaN(car.value) ||
    isNaN(electricity.value) ||
    isNaN(gas.value) ||
    isNaN(naturalGas.value) ||
    isNaN(lpg.value) ||
    isNaN(coal.value) ||
    isNaN(heatingOil.value) ||
    isNaN(wood.value) ||
    isNaN(bus.value) ||
    isNaN(motorbyke.value) ||
    isNaN(tube.value) ||
    isNaN(airplaneDomestic.value) ||
    isNaN(airplaneInternational.value)
  ) {
    result.innerHTML = "Please enter a valid number";
    return;
  }

  if (car.value !== "") {
    if (carType.value == "small-car") {
      if (fuelType.value == "diesel") {
        total += car.value * 0.218;
      }
      if (fuelType.value == "petrol") {
        total += car.value * 0.238;
      }
      if (fuelType.value == "hybrid") {
        total += car.value * 0.164;
      }
      if (fuelType.value == "electric") {
        total += car.value * 0.36;
      }
    }
    if (carType.value == "medium-car") {
      if (fuelType.value == "diesel") {
        total += car.value * 0.265;
      }
      if (fuelType.value == "petrol") {
        total += car.value * 0.299;
      }
      if (fuelType.value == "hybrid") {
        total += car.value * 0.17;
      }
      if (fuelType.value == "electric") {
        total += car.value * 0.112;
      }
    }
    if (carType.value == "large-car") {
      if (fuelType.value == "diesel") {
        total += car.value * 0.326;
      }
      if (fuelType.value == "petrol") {
        total += car.value * 0.446;
      }
      if (fuelType.value == "hybrid") {
        total += car.value * 0.231;
      }
      if (fuelType.value == "electric") {
        total += car.value * 0.121;
      }
    }
    if (carType.value == "electric-car") {
      if (fuelType.value == "diesel") {
        total += car.value * 0.26811;
      }
      if (fuelType.value == "petrol") {
        total += car.value * 0.28;
      }
      if (fuelType.value == "hybrid") {
        total += car.value * 0.184;
      }
      if (fuelType.value == "electric") {
        total += car.value * 0.112;
      }
    }
  }

  if (electricity.value !== "") {
    total += electricity.value * 0.233;
  }
  if (gas.value !== "") {
    total += gas.value * 0.184;
  }
  if (naturalGas.value !== "") {
    total += naturalGas.value * 0.2037;
  }
  if (lpg.value !== "") {
    total += lpg.value * 0.2303;
  }
  if (coal.value !== "") {
    total += coal.value * 0.314;
  }
  if (wood.value !== "") {
    total += wood.value * 63.115;
  }
  if (bus.value !== "") {
    total += bus.value * 0.103;
  }
  if (motorbyke.value !== "") {
    total += motorbyke.value * 0.113;
  }
  if (tube.value !== "") {
    total += tube.value * 0.4;
  }
  if (airplaneDomestic.value !== "") {
    total += airplaneDomestic.value * 0.244;
  }
  if (airplaneInternational.value !== "") {
    total += airplaneInternational.value * 0.181;
  }
  // convert to tonnes
  total = total / 1000;
  if (heatingOil.value !== "") {
    total += heatingOil.value * 0.0025;
    console.log(heatingOil.value * 0.0025);
  }
  // round to 2 decimal places
  total = Math.round(total * 100) / 100;
  // display result
  result.innerHTML = "Your carbon footprint is " + total + " tonnes";
});
