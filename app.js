// =======================35 to 38=========================

// =======================Q1=========================
// Write a function that displays current date & time in your
// browser.

// let currentDate = new Date()
// document.write(currentDate)


// =======================Q2=========================
// Write a function that takes first & last name and then it
// greets the user using his full name.
//  function greet(firstname,lastName){
//     document.write("Welcome "+firstname,lastName)
//  }
//  greet("um e ","Farwa")

// =======================Q3=========================
// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
//  function sum(){
// num1 = + prompt("enter first number")
// num2 = + prompt("enter second number")
// ans = num1+num2
// document.write(ans)
//  }
//  sum()

// =======================Q4=========================
// Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function calculator(num1,num2,operator){
//     num1 = + prompt("enter first number")
//     num2 = + prompt("enter second number")
//     operator = prompt("enter operation you want to perform (+ , _ , * ,/ )")
//     switch(operator){
//     case "+":
//         document.write(num1+num2)
//         break;
//     case "_":
//          document.write(num1-num2)
//         break;
//     case "*":
//         document.write(num1*num2)
//         break;  
//     case "/":
//         document.write(num1/num2)
//         break; 
//     default:
//         document.write("You enter wrong operator")     
//     }
// }
// calculator()

// =======================Q5=========================
// Write a function that squares its argument.

// function squareOfArgument(num){
//     num = +prompt("enter a number")
//     num = num *num
//     document.write(num)
// }
// squareOfArgument()

// =======================Q6=========================
// Write a function that computes factorial of a number.

// function factorial(num){
//         if(num>1){
//             return num *factorial (num-1);
//         }
//         return 1;
//     }
//     document.write(factorial(+prompt("enter a number")));

// =======================Q7=========================
// Write a function that take start and end number as inputs
// & display counting in your browser.
// function displayCounting(start, end) {
  
  
//     for (let i = start; i <= end; i++) {
//       document.write(i + "<br>");
//     }
//   }
// displayCounting(1,10)  

// =======================Q8=========================
// Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// function | JAVASCRIPT
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(side) {
//       return side * side;
//     }
  
//     let baseSquare = calculateSquare(base);
//     let perpendicularSquare = calculateSquare(perpendicular);
  
//     let hypotenuseSquare = baseSquare + perpendicularSquare;
//     let hypotenuse = Math.sqrt(hypotenuseSquare);
  
//     return hypotenuse;
//   }
  
//   let baseLength = +prompt("enter baseLength");
//   let perpendicularLength = +prompt("enter perpendicularLength");
  
//   let hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
//   document.write("Length of Hypotenuse is: " + hypotenuse);
  
// =======================Q9=========================
// Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

// =======Arguments as value=====
// function areaOfRectangleByValues(width, height) {
//     var area = width * height;
//     document.write("Area of rectangle by taking Arguments as value :"+area)
// }
// areaOfRectangleByValues(4,5)

// =======Arguments as variables======
// function areaOfRectangleByVariable(width, height) {
//     var area = width * height;
//     document.write("<br>Area of rectangle by taking Arguments as variables :"+area)
// }
// let width=4
// let height=5
// areaOfRectangleByVariable(width,height)

// =======================Q10=========================
// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
// function isPalindrome() {
//     let word = prompt("Enter a word to check if it's a palindrome:");
//     let reverseWord = word.split('').reverse().join('');
  
//     if (reverseWord === word) {
//       document.write("The given word '" + word + "' is a palindrome.");
//     } else {
//       document.write("The given word '" + word + "' is not a palindrome.");
//     }
//   }
  
//   isPalindrome();
  

// =======================Q11=========================
// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
//  function convertCase(string){
//    let  newstring = string.charAt(0).toUpperCase() + string.slice(1)
//    document.write(newstring)
//  }
//  convertCase(prompt("enter string"))

// =======================Q12=========================
// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// function findLongestWord(str) {
//     let words = str.split(' ');
//     let longestWord = '';
  
//     for ( i = 0; i < words.length; i++) {
//       let word = words[i];
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
  
//     return longestWord;
//   }
  
//   let longestWord = findLongestWord(prompt("enter a string"));
//   document.write(longestWord);
// =======================Q13=========================
// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function occurenceOfSpecifiedLetter(str, letter) {
//     let count = 0;
    
//     for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) === letter) {
//         count++;
//       }
//     }
    
//     return count;
//   }
//   let str = 'Hello, how are you?';
//   let letter = 'o';
  
//   let occurrences = occurenceOfSpecifiedLetter(str, letter);
//  document.write("Number of occurrences of '" + letter + "': " + occurrences);
  
// =======================Q14=========================
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

// ===================function called calcCircumference:============= 
// radiusValue= prompt("enter the value of radius")
// function calcCircumference(radius){
// curcumference = 2 * 3.142 * radius
// document.write("The circumference of circle is: " + curcumference)
// }

// // ===================function called calcArea :=============

// function calcArea(radius){
//     area =   3.142 * radius*radius
//     document.write("<br>The area of circle is: " + area)
//     }

//     calcCircumference(radiusValue)
//     calcArea(radiusValue)

// =======================38 to 44=========================

// =======================Q1=========================
// Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.
// function applyPowerOnNumber(a,b){
// let ans = a**b // b is the power of a
// document.write(ans)
// }
// applyPowerOnNumber(2,3)

// =======================Q2=========================
// Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// function isLeapYear(year){
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         document.write(year + " :is leap year")
//     }
//     else{
//         document.write(year + " :is not a leap year")
//     }

// }
// isLeapYear(+prompt("enter any year"))

// =======================Q3=========================
// Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// =======================Q3=========================
// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2

// function s(a, b, c) {
//     let S = (a + b + c) / 2;
//     return S; 
//   }
  
//   let ss = s(5, 6, 9);
  
//   function Area() {
//     let a = 1; 
//     let b = 2;
//     let c = 5;
//     let area =Math.sqrt (ss * (ss - a) * (ss - b) * (ss - c));
//     document.write("The area of the triangle is: " + area);
//   }
  
//   Area();
//   ====================Q4=========================
// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
  

// function mainFunction(){
//     let mark1= + prompt("enter the sub1 marks")
//     let mark2= + prompt("enter the sub2 marks")
//     let mark3= + prompt("enter the sub3 marks")
//     function average(){
//         let averageOfMarks = (mark1 +mark2 +mark3) /3
// document.write("The average is: "+averageOfMarks)
//     }
//     function percent(){
//         let percentOfmarks =  (mark1 +mark2 +mark3)*100/300    //suppose each subject is of 100 marks
//         document.write("<br>The percantage is: "+percentOfmarks + "%")
//     }
//     average()
//     percent()

// }
// mainFunction()

//   ====================Q5=========================
// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function customIndexOf(){
//     function customIndexOf(string, character) {
//         for (let i = 0; i < string.length; i++) {
//           if (string[i] === character) {
//             return i;
//           }
//         }
//         return -1;
//       }
//       let string = "Hello, world!";
//       let character = "o";
//       let index = customIndexOf(string, character);
      
//       document.write("Index of ", character, " in ", string, " is ", index);
            
// }

// customIndexOf()

//   ====================Q6=========================
// Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function deleteVowels(sentence) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let result = '';
  
//     for (let i = 0; i < sentence.length; i++) {
//       if (!vowels.includes(sentence[i].toLowerCase())) {
//         result += sentence[i];
//       }
//     }
  
//     return result;
//   }
//   let sentence = "This is a sample sentence.";

// let modifiedSentence = deleteVowels(sentence);
// document.write(modifiedSentence);

//   ====================Q7=========================
// Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// function countSuccessiveVowels(text) {
//     let count = 0;
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
  
//     for (let i = 0; i < text.length - 1; i++) {
//       let currentChar = text[i].toLowerCase();
//       let nextChar = text[i + 1].toLowerCase();
  
//       if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
//         let vowelPair = currentChar + nextChar;
//         switch (vowelPair) {
//           case 'ea':
//           case 'ei':
//           case 'eo':
//           case 'eu':
//           case 'ia':
//           case 'ie':
//           case 'io':
//           case 'iu':
//           case 'oa':
//           case 'oi':
//           case 'ou':
//           case 'ua':
//           case 'ue':
//           case 'ui':
//           case 'uo':
//             count++;
//             break;
//           default:
//             break;
//         }
//       }
//     }
  
//     return count;
//   }
//   let sentence = "Pleases read this application and give me gratuity";
//   let occurrences = countSuccessiveVowels(sentence);
//   document.write("Number of occurrences:", occurrences);
    

//   ====================Q8=========================
// The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// function convertToMeters(distanceInKm) {
//     meter = distanceInKm * 1000;
//     document.write("Distance in meter: ", meter);
//   }
  
//   function convertToFeet(distanceInKm) {
//     feet = distanceInKm * 3280.84;
//     document.write("<br>Distance in feet: ", feet);
//   }
  
//   function convertToInches(distanceInKm) {
//     inches = distanceInKm * 39370.1;
//     document.write("<br>Distance in inches: ", inches);

//   }
  
//   function convertToCentimeters(distanceInKm) {
//     centimeters = distanceInKm * 100000;
//     document.write("<br>Distance in centimeters: ", centimeters);

//   }
  
//   function printDistanceConversions(distanceInKm) {
//     convertToMeters(distanceInKm);
//     convertToFeet(distanceInKm);
//     convertToInches(distanceInKm);
//      convertToCentimeters(distanceInKm);

//   }
//   let distanceKm = + prompt("enter distance in Km");
//   printDistanceConversions(distanceKm);
  
//   ====================Q9=========================
// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.
//  function overTimePaymentOfEmployee(totalHoursEmployeeWorked){
//     let regularHours = 40
//     let ratePerHour = 12
//     if(totalHoursEmployeeWorked>=regularHours){
//         document.write("Total over time amount is: " + (totalHoursEmployeeWorked-regularHours)*12)
//     }
//     else{
//         document.write("No over time done by employee")
//     }
//  }
// overTimePaymentOfEmployee(+prompt("enter the total hours employee done"))

//   ====================Q10=========================
// A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// function calculateCurrencyNotes(amount) {
//     let num100s = Math.floor(amount / 100);
//     let remainingAmount = amount % 100;
  
//     let num50s = Math.floor(remainingAmount / 50);
//     let finalRemainingAmount = remainingAmount % 50;
  
//     let num10s = finalRemainingAmount;
  
//     return { num100s, num50s, num10s };
//   }
  
//   let amountToWithdraw = +prompt("enter the amount you want to withdraw")
//   let { num100s, num50s, num10s } = calculateCurrencyNotes(amountToWithdraw);
  
//   document.write("You will have ", num100s + " hundred notes " + num50s +" fifty notes "+ num10s + " ten notes") ;
 
  