
// 1. Light Bulb Experiment

var userinput= prompt("Enter 1 to turn ON the light or 0 to turn OFF the light:");

if (userinput==="1") {
    console.log("The light is ON");
    
} else if(userinput==-"0"){
    console.log("The lignt is OFF");
    
}
else{
    console.log("Invalid Input");
}

// 2. Traffic Light Simulator

var userinput= prompt("Enter a traffic light color; Red, Yellow or Green (Use lowercase for input):");

if (userinput==="red") {

    console.log("Stop");
    
} else if(userinput==="yellow") {

    console.log("Slow Down");
    
} else if(userinput==="green") {

    console.log("Go");
       
}
else{
    console.log("Invalid Color.");
    
}


// 3. Water Temperature Checker

var temperature = prompt("Enter temperature in Celsius");

if (temperature<= 0) {

    console.log("Water is Freezing.");
    
} else if(temperature>0 && temperature<=15){

    console.log("Water is Cold.");

} else if(temperature>15 && temperature<=30){

    console.log("Water is Warm.");
    
}
else if(temperature>30){

    console.log("Water is Hot.");
    
}
else{
    console.log("Invalid Value");
    
}


// 4. Rock-Paper-Scissors Game


var player1 = prompt("Player 1, enter your choice: rock, paper, or scissors (Use lowercase)");
var player2 = prompt("Player 2, enter your choice: rock, paper, or scissors (Use lowercase)");

if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
) {
    console.log("Player 1 Wins");
    

} else if (
    (player2 === "rock" && player1 === "scissors") ||
    (player2 === "paper" && player1 === "rock") ||
    (player2 === "scissors" && player1 === "paper")
) {

    console.log("Player 2 Wins");

} else if (player1 === player2)  {
    
    console.log("It's a Tie!");
    
} else {
    console.log("Invalid input.");
}


// 5. Simple Alarm System

var door = prompt("Is the door open? (yes or no) use lowercase");
var motion = prompt("Is motion detected? (yes or no) use lowercase");

if (door === "yes" || motion === "yes") {
    console.log("Alarm Triggered");
} else if (door === "no" && motion === "no") {
    console.log("All Safe");
} else {
    console.log("Invalid input. Please answer with 'yes' or 'no'.");
}


// 6. Simple Temperature Conversion

var conversion = prompt("Choose conversion type:\nEnter 1 for Celsius to Fahrenheit\nEnter 2 for Fahrenheit to Celsius");
var temperature = prompt("Enter the temperature:");

if (conversion === "1") {

    var fahrenheit = (temperature * 9/5) + 32;
    console.log(temperature + "°C is equal to " + fahrenheit + "°F");

} else if (conversion === "2") {

    var celsius = (temperature - 32) * 5/9;
    console.log(temperature + "°F is equal to " + celsius + "°C");

} else {
    console.log("Invalid input.");
}


// 7. Password Strength Checker

var password = prompt("Enter your password:");

if (password === "") {
    console.log("Enter Something...");
} else if (password.length >= 8) {
    console.log("Strong Password");
} else if (password.length >= 5 && password.length < 8) {
    console.log("Moderate Password");
} else {
    console.log("Weak Password");
}


// 8. Coin Toss Simulator

var userChoice = prompt("Enter 1 for Heads or 0 for Tails:");
var coinToss = Math.floor(Math.random() * 2);

if (userChoice == coinToss) {
    console.log("You Win!");
} else {
    console.log("You Lose!");
}



// 9. Weather Suggestion Experiment

var weather = prompt("Enter the weather (Sunny, Rainy, Cold) in lowercase:");

if (weather === "sunny") {
    console.log("Wear sunglasses");
} else if (weather === "rainy") {
    console.log("Take an umbrella");
} else if (weather === "cold") {
    console.log("Wear a jacket");
} else {
    console.log("Invalid input.");
}


// 10. Simple Arithmetic Quiz

var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 10) + 1;

var operators = ['+', '-', '*', '/'];
var operator = operators[Math.floor(Math.random() * operators.length)];


var correctAnswer;
if (operator === '+') {
    correctAnswer = num1 + num2;
} else if (operator === '-') {
    correctAnswer = num1 - num2;
} else if (operator === '*') {
    correctAnswer = num1 * num2;
} else if (operator === '/') {
    correctAnswer = (num2 !== 0) ? (num1 / num2) : "undefined"; 
}

var userAnswer = prompt(`What is the result of ${num1} ${operator} ${num2}?`);

if (parseFloat(userAnswer) === correctAnswer) {
    console.log("Correct!");
} else {
    console.log("Try Again!");
}



// 11. Eligibility for Voting

var age = prompt("Please enter your age:");

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}


// 12. Maximum of Two Numbers

var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");

if (num1 > num2) {
    console.log("The larger number is " + num1);
} else if (num2 > num1) {
    console.log("The larger number is " + num2);
} else {
    console.log("Both numbers are equal.");
}


 