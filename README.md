# Problem Set 4

Problem Set 4 challenges your ability to declare and use simple variables and mathematical operators available in JavaScript.

## Getting Started

To get started, you'll need to create a [GitHub](https://github.com/) repository to store your Problem Set 4 code. After cloning my skeleton repository, you'll need to setup a remote to push your code to your repository instead of mine. Steps to accomplish this are outlined below.

### Setup

01. Login to your [GitHub](https://github.com/) account and create a new repository named `problem-set-4`.
02. In GitBash, navigate to your `APCSP` folder.
03. Clone my skeleton repository from [GitHub](https://github.com/). This will make a copy of my repository and store it locally.
```
git clone git@github.com:rwilson-ucvts/principles-pset-4-skeleton.git
```
04. The cloning process will have created a folder named `principles-pset-4-skeleton`. Rename this folder to `pset4`.
```
mv principles-pset-4-skeleton pset4
```
05. Change directories to get into your `pset4` folder.
```
cd pset4
```
06. Originally, the remote will be pointing at my repository. We need to overwrite this.
```
git remote rename origin upstream
```
07. Lastly, we need to add a new remote that points at the repository you created earlier. Make sure you replace `YOUR-USERNAME` with your actual username.
```
git remote add origin git@github.com:YOUR-USERNAME/problem-set-4.git
```
08. Launch Atom and select `File > Add Project Folder...`.
09. Navigate to your `pset4` directory and click `Open`.

## Exercises

Problem Set 4 contains 10 exercises, each of which will be written in separate functions. There are several segments of code that should not be modified. They will help you to implement and test your solutions.

### Exercise 1 (`Hello.`)

Write a function to display `Hello, AP Computer Science Principles!` in the paragraph provided in the HTML template file. There should be no user input for this exercise. Test your code by clicking the `Hello` button.

### Exercise 2 (`Hello, Again.`)

Write a function to ask the user to enter his or her name, and display a message in the paragraph provided in the HTML template file. The message should read `Hello, <NAME>!`, where `<NAME>` is the name the user entered. Test your code by clicking the `Hello, Again` button.

### Exercise 3 (`Celsius.`)

Write a function to convert a randomly generated Celsius temperature to an equivalent Fahrenheit temperature. The Celsius temperature will be within the range [-100, 1000], and will be rounded to 2 decimals. Your converted Fahrenheit temperature should also be rounded to 2 decimals. Test your code by clicking the `Celsius` button.

### Exercise 4 (`Fahrenheit.`)

Write a function to convert a randomly generated Fahrenheit temperature to an equivalent Celsius temperature. The Fahrenheit temperature will be within the range [-100, 1000], and will be rounded to 2 decimals. Your converted Celsius temperature should also be rounded to 2 decimals. Test your code by clicking the `Fahrenheit` button.

### Exercise 5 (`Inches.`)

Write a function to convert a number of inches into an equivalent number of miles, yards, feet, and inches. Use a greedy algorithm, meaning you should use as many of the larger units of distance as you can (i.e., miles, yards, feet, and inches, in that order). Report each unit's value on its own line. Test your code by clicking the `Inches` button.

As a hint, you might find the built-in [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) helpful when solving this problem.

### Exercise 6 (`Centimeters.`)

Write a function to convert a number of centimeters into an equivalent number of kilometers, meters, and centimeters. Use a greedy algorithm, meaning you should use as many of the larger units of distance as you can (i.e., kilometers, meters, and centimeters, in that order). Report each unit's value on its own line. Test your code by clicking the `Centimeters` button.

As a hint, you might find the built-in [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) helpful when solving this problem.

### Exercise 7 (`Fluid Ounces.`)

Write a function to convert a number of fluid ounces into an equivalent number of gallons, quarts, pints, cups, and fluid ounces. Use a greedy algorithm, meaning you should use as many of the larger units of volume as you can (i.e., gallons, quarts, pints, cup, and fluid ounces, in that order). Report each unit's value on its own line. Test your code by clicking the `Fluid Ounces` button.

As a hint, you might find the built-in [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) helpful when solving this problem.

### Exercise 8 (`Ounces.`)

Write a function to convert a number of ounces into an equivalent number of tons, pounds, and ounces. Use a greedy algorithm, meaning you should use as many of the larger units of weight as you can (i.e., tons, pounds, and ounces, in that order). Report each unit's value on its own line. Test your code by clicking the `Ounces` button.

As a hint, you might find the built-in [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) helpful when solving this problem.

### Exercise 9 (`Money.`)

Write a function to convert a number of pennies (expressed as a whole number) into an equivalent number of dollars, quarters, dimes, nickels, and pennies. Use a greedy algorithm, meaning you should use as many of the larger denominations as you can (i.e., dollars, quarters, dimes, nickels, and pennies, in that order). Report each denomination's value on its own line. Test your code by clicking the `Money` button.

As a hint, you might find the built-in [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) helpful when solving this problem.

### Exercise 10 (`Change.`)

Write a function to ask the user for a dollar amount less than 1.00 (leading zeroes are required, but dollar signs should be omitted). Display the fewest number of coins (quarters, dimes, nicks, and pennies) with which the change can be made. Test your code by clicking the `Change` button.

As a hint, you might find the built-in [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) helpful when solving this problem.

## Deadline

Your Canvas submission is due at or before 11:59pm on Monday, November 19, 2018.

### Submission Requirements

All that is required for submission is the public URL to your [GitHub](https://github.com/) repository for this problem set. If you forgot how to create a public URL for your repository, reread the [original instructions from Problem Set 3¾](https://canvas.instructure.com/courses/1408038/pages/github-pages?module_item_id=19614011).
