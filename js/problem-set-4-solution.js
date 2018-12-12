/*
 * SOLUTION: Hello.
 */

function hello() { //defines function as hello
  let result = "Hello, AP Computer Science Principles!"; // variable "result" is defined as an output stating "Hello, AP Computer Science Principles!"
  document.getElementById("output1").innerHTML = result; // the variable "result" connects to html through id "output1" to function on browser

  check("hello"); //preset code checks if user's solution code is correct or false for "hello" excercise
}

/*
 * SOLUTION: Hello, Again.
 */

function helloAgain() { //defines function as helloAgain
  let name = prompt("What is your name?"); //variable "name" is defined as to create a prompt to ask the user "What is your name?"

  let result = "Hello, " + name + "!"; // variable "result" is defined to say "Hello" [whatever name user inputs]!
  document.getElementById("output2").innerHTML = result; // the variable "result" connects to html through id "output2" to function on browser

  check("helloAgain", name); //preset code checks if user's solution code is correct or false for "helloAgain" excercise and matches "name" user input
}

/*
 * SOLUTION: Celsius.
 */

function celsius() { //defines function as celsius
  let cels = Number(((Math.random() * 1001) - 100).toFixed(2)); //variable "cels" is defined to allow the user to input a numeric value for celsius within the range [-100, 1000], and will be rounded to 2 decimals.

  let fahr = cels * 9 / 5 + 32; // variable "fahr" is defined to include whatever "cels" produces and follows the given formula for converting celsius to fahrenheit
  let result = cels + " degrees Celsius equals " + fahr.toFixed(2) + " degrees Fahrenheit."; // variable "result" is defined to produce the output of formula for finding "cels", followed by text, " degrees Celsius equals ", than the output for finding "fahr", rounded to 2 decimal places followed by the text " degrees Fahrenheit."
  document.getElementById("output3").innerHTML = result; // the variable "result" connects to html through id "output3" to function on browser

  check("celsius", cels); //preset code matches "cels" user input and checks if user's solution code is correct or false for "celsius" excercise
}

/*
 * SOLUTION: Fahrenheit.
 */

function fahrenheit() {
  let fahr = Number(((Math.random() * 1001) - 100).toFixed(2)); // variable "fahr" is defined to allow the user to input a numeric value for fahrenheit within the range [-100, 1000], and will be rounded to 2 decimals.

  let cels = (fahr - 32) * 5 / 9; // variable "cels" is defined to include whatever "cels" produces and follows the given formula for converting fahrenheit to celsius
  let result = fahr + " degrees Fahrenheit equals " +  cels.toFixed(2) + " degrees Celsius."; // variable "result" is defined to produce the output of formula for finding "fahr", followed by text, " degrees Fahrenheit equals ", than the output for finding "cels", is rounded to 2 decimal places followed by the text " degrees Celsius."
  document.getElementById("output4").innerHTML = result; // the variable "result" connects to html through id "output4" to function on browser

  check("fahrenheit", fahr); //preset code matches "cels" user input and checks if user's solution code is correct or false for "celsius" excercise and
}

/*
 * SOLUTION: Inches.
 */

function inches() { //defines function as inches
  const MILE = 63360; //variable "MILE" is defined as a constant that stays as the value "63360"
  const YARD = 36; //variable "YARD" is defined as a constant that stays as the value "36"
  const FOOT = 12; //variable "FOOT" is defined as a constant that stays as the value "12"

  let input = -1; // variable "input" is defined as the value "-1"
  while (input < 0) { // while input stays is less than 0, (as defined in variable input above) the code below runs
    input = Number(prompt("Enter a non-negative integer.")); //variable input is now defined in while loop to produce a prompt that has to be a number to tell the user "Enter a non-negative integer."

    if (input === null) { // if statement states condition that if the input is strictly a null value the code below it should run
      break; //The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement
    } else if (Number.isNaN(input)) { //else if statement states condition to specify the new condition to test (if the number is not a number), if the first condition is false regarding the variable "input", the code below it should run
      input = -1; // variable "input" is defined in "else if" loop to be defined as "-1"
    } else if (!Number.isInteger(input)) {
      input = -1; // variable "input" is defined in "else if" loop to be defined as "-1"
    }
  }

  if (input !== null) { // if the variable "input" is not a null value (as it checks the value and type), the code below should run
    let inches = input; // inches is defined in if statement as the input
    let miles = Math.floor(inches / MILE); //variable "miles" is defined as the the mathematical formula of the input of inches divided by the constant 'MILES', to covert inches to miles
    inches = inches % MILE; //inches will be represented as a percentage of miles
    let yards = Math.floor(inches / YARD); // variable "yards" is defined as the the mathematical formula of the input of inches divided by the constant 'YARDS', to covert inches to yards
    inches = inches % YARD; //inches will be represented as a percentage of yards
    let feet = Math.floor(inches / FOOT); // variable "feet" is defined as the the mathematical formula of the input of inches divided by the constant 'FOOT', to covert inches to feet
    inches = inches % FOOT; //inches will be represented as a percentage of feet

    let result = "Miles: " + miles + "<br/>" + // variable "result" will display an output the text "Miles: ", the output of miles, and a line break
                 "Yards: " + yards + "<br/>" + //...an output of the text "Yards: ", the output of miles, and a line break
                 "Feet: " + feet + "<br/>" + //...an output of the text "Feet: ", output of feet and a line break
                 "Inches: " + inches; //...an output of the text "inches" and the ouput of inches
    document.getElementById("output5").innerHTML = result; //connects variable result to HTML to display an output
  } else {
    document.getElementById("output5").innerHTML = ""; //connects to HTML so it displays nothing
  }

  check("inches", input); //tells if inches excercise is correct that corresponds with the user input
}

/*
 * SOLUTION: Centimeters.
 */

function centimeters() { //defines function centimeters
  const KILOMETER = 100000; //variable "KILOMETER" stays at given value
  const METER = 100; //variable "METER" stays at given value

  let input = -1; // variable "input" is defined in  loop to be defined as "-1"
  while (input < 0) { //while loop states that while input < 0, the code below should run
    input = Number(prompt("Enter a non-negative integer.")); //input is for given prompt has to be a number

    if (input === null) { //if loop defines input as null, the code below should run
      break; //The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement
    } else if (Number.isNaN(input)) { //else if statement states condition to specify the new condition to test (if the number is not a number), if the first condition is false regarding the variable "input", the code below it should run
      input = -1; // variable "input" is defined in "else if" loop to be defined as "-1"
    } else if (!Number.isInteger(input)) {
      input = -1; // variable "input" is defined in "else if" loop to be defined as "-1"
    }
  }

  if (input !== null) {
    let centimeters = input;
    let kilometers = Math.floor(centimeters / KILOMETER);
    centimeters = centimeters % KILOMETER;
    let meters = Math.floor(centimeters / METER);
    centimeters = centimeters % METER;

    let result = "Kilometers: " + kilometers + "<br/>" +
                 "Meters: " + meters + "<br/>" +
                 "Centimeters: " + centimeters;
    document.getElementById("output6").innerHTML = result;
  } else {
    document.getElementById("output6").innerHTML = "";
  }

  check("centimeters", input);
}

/*
 * SOLUTION: Fluid Ounces.
 */

function fluidOunces() { //defines function as fluidOunces
  const GALLON = 128;
  const QUART = 32;
  const PINT = 16;
  const CUP = 8;

  let input = -1; // variable "input" is defined  as "-1"
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));

    if (input === null) {
      break; //The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement
    } else if (Number.isNaN(input)) { //else if statement states condition to specify the new condition to test (if the number is not a number), if the first condition is false regarding the variable "input", the code below it should run
      input = -1; // variable "input" is defined in "else if" loop to be defined as "-1"
    } else if (!Number.isInteger(input)) {
      input = -1; // variable "input" is defined in "else if" loop to be defined as "-1"
    }
  }

  if (input !== null) {
    let fluidOunces = input;
    let gallons = Math.floor(fluidOunces / GALLON);
    fluidOunces = fluidOunces % GALLON;
    let quarts = Math.floor(fluidOunces / QUART);
    fluidOunces = fluidOunces % QUART;
    let pints = Math.floor(fluidOunces / PINT);
    fluidOunces = fluidOunces % PINT;
    let cups = Math.floor(fluidOunces / CUP);
    fluidOunces = fluidOunces % CUP;

    let result = "Gallons: " + gallons + "<br/>" +
                 "Quarts: " + quarts + "<br/>" +
                 "Pints: " + pints + "<br/>" +
                 "Cups: " + cups + "<br/>" +
                 "Fluid Ounces: " + fluidOunces;
    document.getElementById("output7").innerHTML = result;
  } else {
    document.getElementById("output7").innerHTML = "";
  }

  check("fluidOunces", input);
}

/*
 * SOLUTION: Ounces.
 */

function ounces() { //defines function as ounces
  const TON = 32000; //variable "TON" stays at given value
  const POUND = 16; //variable "POUND" stays at given value

  let input = -1; // variable "input" is defined as "-1"
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));

    if (input === null) {
      break; //The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement
    } else if (Number.isNaN(input)) { //else if statement states condition to specify the new condition to test (if the number is not a number), if the first condition is false regarding the variable "input", the code below it should run
      input = -1; // variable "input" is defined in "else if" loop to be defined as "-1"
    } else if (!Number.isInteger(input)) {
      input = -1; // variable "input" is defined in "else if" loop to be defined as "-1"
    }
  }

  if (input !== null) {
    let ounces = input;
    let tons = Math.floor(ounces / TON);
    ounces = ounces % TON;
    let pounds = Math.floor(ounces / POUND);
    ounces = ounces % POUND;

    let result = "Tons: " + tons + "<br/>" +
                 "Pounds: " + pounds + "<br/>" +
                 "Ounces: " + ounces;
    document.getElementById("output8").innerHTML = result;
  } else {
    document.getElementById("output8").innerHTML = "";
  }

  check("ounces", input);
}

/*
 * SOLUTION: Money.
 */

function money() { //defines function as money
  const DOLLAR = 100; //variable "DOLLAR" stays at given value
  const QUARTER = 25; //variable "QUARTER" stays at given value
  const DIME = 10; //variable "DIME" stays at given value
  const NICKEL = 5; //variable "NICKEL" stays at given value

  let input = -1; // variable "input" is defined as "-1"
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));

    if (input === null) {
      break; //The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement
    } else if (Number.isNaN(input)) { //else if statement states condition to specify the new condition to test (if the number is not a number), if the first condition is false regarding the variable "input", the code below it should run
      input = -1; // variable "input" is defined in "else if" loop to be defined as "-1"
    } else if (!Number.isInteger(input)) {
      input = -1; // variable "input" is defined in "else if" loop to be defined as "-1"
    }
  }

  if (input !== null) {
    let pennies = input;
    let dollars = Math.floor(pennies / DOLLAR);
    pennies = pennies % DOLLAR;
    let quarters = Math.floor(pennies / QUARTER);
    pennies = pennies % QUARTER;
    let dimes = Math.floor(pennies / DIME);
    pennies = pennies % DIME;
    let nickels = Math.floor(pennies / NICKEL);
    pennies = pennies % NICKEL;

    let result = "Dollars: " + dollars + "<br/>" +
                 "Quarters: " + quarters + "<br/>" +
                 "Dimes: " + dimes + "<br/>" +
                 "Nickels: " + nickels + "<br/>" +
                 "Pennies: " + pennies;
    document.getElementById("output9").innerHTML = result;
  } else {
    document.getElementById("output9").innerHTML = "";
  }

  check("money", input);
}

/*
 * SOLUTION: Change.
 */

function change() { //defines function as change
  const QUARTER = 25; //variable "QUARTER" stays at given value
  const DIME = 10; //variable "DIME" stays at given value
  const NICKEL = 5; //variable "NICKEL" stays at given value

  let input = -1; // variable "input" is defined as "-1"
  while (input < 0 || input >= 1) {
    input = Number(prompt("Enter a non-negative number less than 1.00."));

    if (input === null) {
      break; //The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement
    } else if (Number.isNaN(input)) { //else if statement states condition to specify the new condition to test (if the number is not a number), if the first condition is false regarding the variable "input", the code below it should run
      input = -1; // variable "input" is defined in "else if" loop to be defined as "-1"
    }
  }

  if (input !== null) {
    let pennies = input;
    pennies = Number((pennies * 100.00).toFixed(0));
    let quarters = Math.floor(pennies / QUARTER);
    pennies = pennies % QUARTER;
    let dimes = Math.floor(pennies / DIME);
    pennies = pennies % DIME;
    let nickels = Math.floor(pennies / NICKEL);
    pennies = pennies % NICKEL;

    let coins = quarters + dimes + nickels + pennies;
    document.getElementById("output10").innerHTML = coins + (coins === 1 ? " coin." : " coins.");
  } else {
    document.getElementById("output10").innerHTML = "";
  }

  check("change", input);
}
