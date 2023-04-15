// Ask the user for a Temperature in Celsius
const degCent = prompt("Enter a temperature in degrees Celsius");

// Convert the Temperature to Fahrenheit
const degFaren = (9 / 5) * degCent + 32;

// Construct a message to display the result
const message = degCent + " degrees Celsius is equal to " + degFaren + " degrees Farenheit.";

//Display the message on the webPage
document.write(message)



let str1 = 'Laurence';
console.log(typeof str1);

let str2 = "Svekis";
console.log(typeof str2);

let val1 = undefined;
console.log(typeof val1);

let val2 = null;
console.log(typeof val2);

let myNum = 1000;
console.log(typeof myNum);