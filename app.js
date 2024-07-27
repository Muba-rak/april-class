//console.log("Hello world");

// VARIABLES
// x = 3 y = 6

// let const var
// const y = 7;
// console.log(y);
// let x = 8;
// console.log(x);
// x = 98;
// console.log(x);
//rules of naming variables
// letters , cannot start with numbers
// const myName = 'Gideon'
// const 9age = 35
// let my name = 'ade'
///camelCasing

// const myNameIs = "Ade";

// const a = 76;
// const age = 78;

//DATA TYPES
// primitive strings, numbers, boolean, null undefined complex objects arrays
//STRINGS - text characters '' ""

// const firstName = "Gideon";
// const lastName = "Promise";
// console.log(firstName, lastName);
// // properties concatenation, length and methods
// console.log(firstName.length);
// console.log(lastName.length);

// const fullName = firstName + " " + lastName;

// console.log(fullName);

// tolowercase, to uppercase, startswith, endswith, trim , slice, includes,
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// console.log(fullName.startsWith("yl"));
// console.log(fullName.endsWith("ng"));
// console.log(fullName.includes("wsl"));
// console.log(fullName.slice(1, 5));

// //indexOf
// console.log(fullName.indexOf("i"));
// console.log(fullName.lastIndexOf("i"));
// console.log(fullName.charAt(7));

// NUmbers
// const myAge = 60;
// const myWeight = 65;

// // + - * / ** %
// console.log(3 * 6);
// console.log(2 ** 3);
// console.log(4 / 2);
// console.log(5 % 2);

// console.log(6 + 8 * 5 - 2 * 3);
// // BODMAS

// let balance = 5000;

// balance = balance + 4500;
// console.log(balance);
// balance = balance - 6000;
// console.log(balance);
// balance += 12000;
// balance -= 2000;
// balance *= 2;
// console.log(balance);

// let likes = 0;
// // likes += 1;
// likes++;
// likes--;
// console.log(likes);

// BOOLEAN(true or false)
// logical comparison > < == === >= <=
// console.log(6 > 9);
// console.log(5 >= 3);
// console.log(5 == "5");
// console.log("5" === "5");
// // logical operators  and && or || not !
// console.log(5 > 3 && 7 > 9);
// console.log(6 < 8 || 4 > 9);
// console.log(4 !== 4);

// // null and undefined
// const myheight = null;
// console.log(myheight);
// let shoeSize;
// console.log(shoeSize);

//conditional statement
if (9 > 90) {
  console.log("YES");
}

const atmPin = 5678;
const enteredPin = 5678;

if (enteredPin === atmPin) {
  console.log("Perform Transactions");
} else {
  console.log("Incorrect Pin");
}

//ternary operator
//condition ? first Action : second action
// const myPassword = "672378";
// myPassword.length >= 9
//   ? console.log("Password is recommended")
//   : console.log("Password is not recommended");

// // kids <18, adult 18 - 60, old >60

// const age = 76;

// if (age < 18) {
//   console.log("You are in the kid category");
// } else if (age >= 18 && age <= 60) {
//   console.log("You are in the adult category");
// } else {
//   console.log("You are in the old category");
// }
// //1000 + 2000 = 10002000
// //TYPE CONVERSION AND COERCION
// // const num1 = prompt("enter a num: ");
// // const num2 = prompt("Enter second number: ");
// // console.log(typeof num1, typeof num2);

// // '2' - 2, 'promise' - '1000'
// // NUmber, parseInt
// const num1 = "2000";
// // const convertedNum = Number(num1);
// const convertedNum = parseInt(num1);

// console.log(typeof convertedNum);

// console.log("hello" / 3);

// // arrays []

// const arr1 = [1, 4, true, "hello", [23, 5], null];

// const students = ["Gideon", "David", "Promise", "Yinka", "Ade"];

// //array properties and array methods
// console.log(students);
// console.log(students.length);
// // position
// console.log(students[10]);
// students[0] = "Class Rep";

// // add and remove elements from an array
// //
// students.push("Benny");
// students.push("Ngozi");
// students.unshift("Adam");
// students.pop();
// students.pop();
// students.shift();
// console.log(students);

// //pop and shift

// console.log(students.includes("David"));
// console.log(students.slice(0, 2));
// console.log(students.concat(["Ngozi", "Adam"]));
// console.log(students.sort());
// console.log(students.reverse());
//functions

function greeting() {
  console.log("Welcome to the App");
}
// greeting();
// greeting();

//function declaration

function myGreeting(name = "user") {
  console.log(`${name}, Welcome to class`);
}

myGreeting("Gideon");
myGreeting("Promise");
myGreeting("David");
myGreeting();

function addNums(a, b) {
  console.log(a + b);
}
addNums(60, 7);
addNums(78, 56.9);

// function expression arrow functions
const calcAverage = function (a, b, c) {
  console.log((a + b + c) / 3);
};
calcAverage(5, 6, 7);

const oddOrEven = (num) => {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is an odd number`);
  }
};
oddOrEven(79);

//return key word
const multiplyNum = (a, b) => {
  return a * b;
};
multiplyNum(4, 5);

console.log(`The multiplication of 3 and 7 is ${multiplyNum(3, 7)}`);
//higher array methods filter, find ,sort, reduce, map, forEach
let savings = 20000;
const transactions = [5000, -125, 7500, 50000, -20000, 5000000, 60000000];

transactions.map((amount) => {
  savings += amount;
});
console.log(`Your account balance is ${savings} Naira`);

const yourDebits = transactions.filter((amount) => amount < 0);
console.log(yourDebits);
const yourCredits = transactions.filter((amount) => amount > 0);
console.log(yourCredits);
// 100,000

const invalidTransaction = transactions.find((amount) => amount > 100000);
console.log(invalidTransaction);
if (invalidTransaction) {
  console.log("Account has beeen restricted");
}
const sortedTransations = transactions.sort((a, b) => b - a);
console.log(sortedTransations);
// objects
const names = ["ade", "ngozi", "wale", "angel", "gideon"];
console.log(names.sort().reverse());

//OBJECTS {key: value, key: value}

const person = {
  firstName: "Gideon",
  lastName: "Solomon",
  age: 30,
  gender: "male",
};

console.log(person);
// dot a nd bracket objName.propertyName objName['propertName']
console.log(person.age);
console.log(person["gender"]);
person.favBook = "Things fall apart";
console.log(person);
person.bestFriend = "Promise";

// object destructuring

const {age, gender, favBook} = person

//DOM

// const heading2 = document.querySelector("h2");
// heading2.textContent = "Promise is asking a question";
