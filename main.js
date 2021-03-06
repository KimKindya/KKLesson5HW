
			// This file will run examples of different new concepts we learned in JavaScript
			

			// 1. VARIABLES

			// Variables: The following variables are numbers 

			var firstThing = 39;
			console.log(firstThing);

			var secondThing = 42;
			console.log(secondThing);

			var twoThings = (firstThing + secondThing);
			console.log(twoThings);

			// Variables: The following variables are words (which are "strings" of characters)

			var firstFood = "Chili";
			console.log(firstFood);

			var secondFood = "ConCarne"
			console.log(secondFood);

			var comboFood = (firstFood + secondFood);
			console.log (comboFood);


			//2. DEBUGGING

			//Alerts: Below is the code for an alert. It is a box that opens up in the browser with the output that you designate in the parentheses.
				// The box goes away when you click "OK"

			alert("The World Needs More Lerts");



			//Comments: You are reading a comment right now. It will not show up on the page. This is to write notes to yourself and other developers reading your code to clarify what you are doing.

				// A single-line comment is designated by the two slashes.
				/*You can also make comments like this.*/

				//You can use the comments to negate code you don't want to run

					// var FirstFood = "Chili";
					// console.log(FirstFood)

					// var SecondFood = "ConCarne"
					// console.log(SecondFood)

					// var ComboFood = (FirstFood + SecondFood);
					// console.log (ComboFood)

				// Create comments by clicking CRTL+? (I have a WINDOWS machine)


			// Console: The console is visible in the browser. It can show you the output for JavaScript.

			    // The JavaScript console can be opened in Google Chrome Ctrl + Option + J on Windows machines)

				// JavaScript can be run line by line inside of the console

				// You can also output to the console in javascript by using the following code

			console.log("This appears in the console");



			//3. DIFFERENT DATA TYPES

			//String: A line of non-numeric characters. Usually appear as words.

			console.log("Word");
			console.log("Name"); 
			console.log("asdfghjkl");
			console.log("supercalifragilisticexpialidocious");



			//Numbers: 

			console.log(1);
			console.log(256); 
			console.log(563241);
			console.log(3.14159);



			//Boolean: True or False statements

			//This is how you set up a True statement

			var birdsCanFly=true;

			console.log (birdsCanFly);
			
			// The console will tell you "true"

			// Use an exclamation point to negate a true statement

			console.log(!birdsCanFly);




			//Undefined: the data has no value

			//We have not designated a value for this variable. Therefore, the variable below will return the word "undefined" in the console

			var pigsCanFly;

			console.log(pigsCanFly);

			// 4.ARRAYS

			// Arrays hold a collection of data, of any data type, designated by square brackets. They can hold any data type.

			// [Matthew, Mark, Luke, John]
			// [5, 10, 15, 20]

			//Arrays can also be stored in variables:

			// Strings
			
			var theBeatles = ["John", "Paul", "George", "Ringo"];

			console.log(theBeatles);

			// Numbers

			var luckyNumbers = [4,8,15,16,23,42];

			console.log(luckyNumbers);


			//index: the index of an item inside of an array corresponds to its position from the beginning of the array
			// Use the index to select one or more items in an array
			//The first item always has an index of 0. Don't count from 1!

			// Using the Beatles example above

			console.log(theBeatles[2]);

			// Since John is 0, you should see "George" as 2

			//Multi-dimensional Array: An array that contains other arrays.

			var birds = ["Flamingoes","Parrots"];
			console.log(birds);

			var dinosaurs = ["Raptors","Tyrannosaurs"];
			console.log(dinosaurs);

			var creatures = [birds,dinosaurs];
			console.log(creatures);

			// Syntax to access items items nested inside of a multi-dimensional array:

			//declare your mult-dimensional array
		
			//access the first array inside
			//then the first item inside that array

			console.log(creatures[0][0]);
			
			//Flamingoes

			//access the second array inside
			//then the first item inside that array

			console.log(creatures[1][0]);

			//Raptors

			//access the first array inside
			//then the second item inside that array

			console.log(creatures[0][1]);

			//Parrots

			//5.TESTING

			//Testing compares two strings to see if the comparison is true or false. 

			// Use THREE EQUALS SIGNS (===) to see if they are equal
			// Use (!==) for "does not equal"

				// EXAMPLES:

				// In console, enter
				// "tribble"==="tribble";

				// //The console will come back "true"

				// In console, enter
				// "tribble"==="klingon";

				// //The console will come back "false"

				// In console, enter
				// "tribble"!=="klingon"

				//The console will come back "true"

			//Using three equals signs instead of two also checks the object type
			// If you don't check type, these are both true:
			// (10-5) == 5; 
			// (10-5) == "5";

			// or, a string becomes equal to a number
			// Can cause bugs down the road!

			//Testing Numbers 

			var x = 5;
			var y = 20;

			console.log(x<y);

			// console says "true"

			console.log(x>y);

			// console says "false"

			console.log(x<=y);

			// Console says "true"


			//6. LOGIC

			//If statement: allows us to run code only if a certain test evaluates to true
			// Note how parentheses and brackets are used in the syntax

			var x = 7
			var y = 14

			if(x>y){
			console.log("You'll never see this in the console because 7 is not greater than 14");
			}
			if(x<y){
			console.log("But you'll see this because 7 is less than 14");
			}

			//else statement: runs only if the statement in the if statement is false

			if(x>y){
			console.log("You'll never see this because 7 is not greater than 14");
			} else{
			console.log("You will see this though, since 7 > 14 evaluates to false");
			}

			//else if statement: If you want to run another test before getting to else

			if(x>y){
			console.log("You'll never see this because 7 is not greater than 14");
			}else if(x===x){
			console.log("Yes, 7 really is equal to 7, so this will show up in the console")
			}else{
			console.log("We won't get here because our else if evaluates to true");
			}


			//7.FUNCTIONS

			//Function: encapsulates code for later use
				//takes arguments, which are used as variables inside the function
				//usually returns a value, which can be used later on or displayed immediately

			// Step 1: Declare the function (theMultiple) and arguments (firstFactor and secondFactor)

			function theMultiple (firstFactor, secondFactor){


			// Step 2: Tell the function to RETURN an operation on the arguments designated by you. (In this case we're telling it to multiply the two factors.)

			return firstFactor * secondFactor;
			}

			// Step 3: INVOKING or CALLING the function -- give the arguments values in nested parentheses next to the name of the function, also in parens; output it to the console log.
			// Here we use 5 and 10 for the arguments.

			console.log(theMultiple (5,10));

			// Here we have a function that uses one argument in the form of a string (a day of the week)

			// declare a function with the name alertDay that takes one argument, whatDay

			function alertDay(whatDay){
			// the function returns an alert with a day of the week
			return alert(whatDay);
			}
			// invoke the function
			alertDay("Wednesday");
	
		