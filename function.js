// Function statement
// function dibosh(){
//     console.log("Kaise ho mere bhai");
// }
// dibosh();

// Function expression
// let fnc = function(){
//}

// Fat arrow function
// let fnc = ()=>{
//    console.log("heheheheh");
// }
// fnc();

// function dance(d1){
//     console.log(`${d1} naach raha hai`);
// }

// dance("ghoda");
// dance("hati");
// dance("kutta");

// function add(a1 = 0, a2 = 0){
//     console.log(a1 + a2);
// }

// add(1, 2);
// add(3, 4);

// function dibosh(...val){
//     console.log(val);
// }
// dibosh(1,2,3,4,5,6,7,8,9);

// function bnp (){
//     return 20;
// }

// let val = bnp();
// console.log(val);

// first clas functions ( First class fucntion is one type of variable later we can invoke it by it variable name varialbe name itself is a function here.The function accept another function as parameter that is higher order function)

// function sayHello(){
//     return "Hello, ";
// }

// function greeting(helloMessage, name){
//     console.log(helloMessage() + name);
// }

// greeting(sayHello, "Dibosh");

//Higher order function(Higher order function is a function thata return function or accept a function on its parameter)

// CallBack function, passed as a parameter in the higher order function

// function callBackFunction(){
//     console.log("I am a callback function");
// }

// //Higher order function
// function highOrderFunction(func){
//     console.log("I am a higher Order function")
//     func()
// }

// highOrderFunction(callBackFunction)
//{{Not Recommanded
// const radius = [1, 2, 3];

// //function to calculate area of the circle

// const calculateArea = function (radius){
//     const output = [];
//     for(let i = 0; i< radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);

//     }
//     return output;
// }

// //function to calculate the diameter of the circle

// const calculateDiameter = function (radius){
//     const output = [];
//     for( let i = 0; i< radius.length; i++){
//         output.push( 2 * radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radius));
// console.log(calculateDiameter(radius));

// }} 

// const radius = [1, 2, 3];

// const area = (radius) => Math.PI * radius * radius;

// const diameter = (radius) => 2 * radius;

// const calculate = (radius, logic) => {
//     const output = [];
//     for(let i = 0; i< radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, diameter));

// Pure vs Impure Functions
//Pure Function(Pure Function is a function that never change the outside value)

// function add(a, b){
//     return a + b;
// }

// console.log(add(2, 5));
// console.log(add(3, 5));

// let a = 10;

// function add() {
//     console.log("Your are useless");
// }

// add();

// Impure function(Impure Function are the function that changes the outside value of a function)

// let count = 0;

// function increment(){
//     count++;
//     return count;
// }

// console.log(increment(count));

// let cart = ["Apple", "Banana"]
// function addToCart(cart, item){
//     cart.push(item);
//     return cart;
// }
// console.log(addToCart(cart, "Orange"));

//Closures and lexical scoping
//Closures(a feature where inner function has access to the outher function variabless)
// function init(){
//     var name = "Mozilla";
    
//     function displayName(){
//         console.log(name);
//     }
//     displayName();
// }

// init();

// function dibosh(){
//     let a = 10;
//     return function(){
//         console.log(a);
//     }
// }
// const result = dibosh();
// result();

//lexical Scoping
// function abdc(){
//     let a = 12;
//     function efgh(){
//         let b = 13;
//         function ijkl(){
//             let c = 14;
//         }
//     }
// }
// abdc();

//IIFE(Immediate invoked function expression)

// (function(){
//     console.log("Dibosh");

// })();

//Hoisting

// dibosh();

// function dibosh(){
//     console.log("You are superb");
// }

//Q1: What's the difference between function declaration and expression in terms of hoising?
// Let's clear that function decalration/statement can be hoist and function expression cann't be hoited that's it.

// abdc();

// function abdc(){
//     console.log("Hello fuckers");
// } this is hoisting in function statement

// abdc ();

// let hello = function abdc(){
//     console.log("You are fucker");
// } it cann't be run cause hoisting cann't be done in function expression

//Q2: Convert this into a fat arrow function
// function multiply(a, b){
//     return a * b;
// } 

// let multiply = (a, b) => {
//     return a * b;
// }

//Q3: 
// function welcome(name){
//     console.log(name);
// }
// welcome("Dibosh"); In this qeustion which one is  parameter and which one is arguments
// Here inside welcome funciton name is a parameter and the value "Dibosh" pass on the welcome functiona are arguments


//Q4:
// function abcd(...val){
//     console.log(val);
// }
// abcd(1,2,3,4,5,6,7);
// // Here ... indicate rest operator in function and when we invoke the function it will return array as outpur.
// function abcd(a, b,c, ...val){
//     console.log(a, b, c, val);
// }
// abcd(1,2,3,4,5,6,7);

// Use rest parameter to accept any number of scoroes and return the total.

// function getScore(...scores){
//     let total = 0;
//     scores.forEach(function(val){
//         total = total + val;
//     })
//     return total
// }

// console.log(getScore(1,2,3,4,5,6,7));

//Q: function checkAge(){
//     if(age < 18) {
//         console.log("Too Young");
//     } else {
//         console.log("Allowed");
//     }
// } fix this function as early return?

// function checkAge(age){
//     if(age < 18) return "Too Young";
//     return "allowed";
// }
// console.log(checkAge(24));

// can you  assign a function to a variable and then call it? show how?

// let a = () => {

// };
// console.log(a());

// What will be the output and why?

// greet();

// var greet = function(){
//     console.log("Hi!");
// };
// this code will show error cause  Hoisting only support in function declaration not function expression/statement

// Write a code to make BMI Calculator

// function bmi(weight, height){
//     return weight / (height * height);
// }

// console.log(bmi(77, 1.73).toFixed);

// Create a reusable disount calculator(HOF)

// function createDiscountCalculator(discountPercent){
//     return function(price){
//         const discount = price * (discountPercent / 100);
//         return price - discount;
//     }
// }

// const percentOff = createDiscountCalculator(20);
// console.log(percentOff(560));
 
// function outer (){
//     let count = 0;
//     return function inner(){
//         count++;
//         console.log(count);
//     };
// }

// const fn = outer();
// fn();
// fn();
// fn();

// function createCounter (){
//     let count = 0;
//     return function counterValue(){
//         count++;
//         return count;
//     };
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());


////////////////////Arrays//////////////////////////

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.sort(function(a, b){
//     return b - a;
// })

// console.log(newArr);

// ////////// push() method
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.push("6"));
// console.log(numbers);

// ////// pop() method

// const numbers = [1, 2, 3, 4, 5];

// numbers.pop();
// console.log(numbers);

// ///// shift() method

// let numbers = [1, 2, 3 , 4, 5];
// console.log(numbers.shift());
// console.log(numbers);


// ///// unshift() method

// let numbers = [1, 2, 3 , 4, 5];
// console.log(numbers.unshift(6, 7, 8));
// console.log(numbers);

// //////////// splice() method

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 2); // Just splice method is used to remove the element from the array and it will return the removed element as output
// console.log(arr); // Here 2 is the index where we want to start the operation and 2 is the number of element we want to remove from the array

// let arr1 = [1, 2, 3, 4, 5];
// arr1.splice(5, 0, 6, 7, 8);// Here splice method is used to add the element in the array and it will return empty array as output cause no element is removed from the array
// console.log(arr1);// Here 5 is the index where we want to add the element and 0 is the number of element we want to remove from the array and 6, 7, 8 are the element we want to add in the array

// let arr2 = [1, 2, 3, 4, 5];
// arr2.splice(2, 3, 10, 11, 12);// Here splice method is used to remove the element from the array and add the element in the array at the same time and it will return the removed element as output
// console.log(arr2);// Here 2 is the index where we want to start the operation and 3 is the number of element we want to remove from the array and 10, 11, 12 are the element we want to add in the array

/////////// slice() method

// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(animals.slice(3, 5));
// console.log(animals.slice(-3, -2));
// console.log(animals.slice());
// console.log(animals.slice(2, -1));

////////////// reverse() method

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());
// console.log(arr.toReversed());

//////////// sort() method
// const months = ["March", "Jan", "Feb", "Dec"];
// const newMonths = months.sort(function(a, b){
//     return a - b;
// });
// console.log(newMonths);

// const words = ["apple", "banana", "grape", "orange"];
// const sortedWords = words.sort((a, b) => a.localeCompare(b));
// console.log(sortedWords);

// const words = ["Banana", "apple", "Cherry"];

// const sortedWords = words.sort((a, b) =>
//   a.toUpperCase().localeCompare(b.toUpperCase())
// );

// console.log(sortedWords);

// const users = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 }
// ];

// users.sort((a, b) => a.age - b.age);

// console.log(newArr);

// const nums = [5, 2, 9, 1, 7];
// const sortedNums = nums.sort(function(a, b){
//     return b - a;
// })
// console.log(sortedNums);

// const fruits = ["banana", "apple", "cherry"];
// fruits.sort();
// console.log(fruits);

// const names = ["rahim", "Karim", "abdul", "Zahid"];
// const sortNames = names.sort((a, b) =>{
//     return a.localeCompare(b);
// })
// console.log(sortNames);

// const words = ["apple", "kiwi", "banana", "fig"];

// const sortedWords = words.sort((a, b) => a.length - b.length);
// console.log(sortedWords);

// const  num = ["10", "5", "20", "1"];
// const sortedNum = num.sort((a, b) => a - b);
// console.log(sortedNum);

// const users = [
//   { name: "A", age: 25 },
//   { name: "B", age: 18 },
//   { name: "C", age: 30 }
// ];

// const sortedUsers = users.sort((a, b) => a.age - b.age);
// console.log(sortedUsers);

// const users = [
//   { name: "rahim" },
//   { name: "Karim" },
//   { name: "abdul" }
// ];

// const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: ''}));
// console.log(sortedUsers);

// const users = [
//   { name: "A", age: 25 },
//   { name: "B", age: 25 },
//   { name: "C", age: 20 }
// ];

// const sortedUsers = users.sort((a, b) => {
//     if (a.age !== b.age){
//         return a.age - b.age;
//     }
//     return a.name.localeCompare(b.name);

// });
// console.log(users);

//////////// forEach() method

// let arr = [ 11, 62, 3, 55, 47];
// arr.forEach(function(val){
//     console.log(val);
// });

// let sum = 0;
// const nums = [1, 2, 3, 4];

// let totalNum = nums.forEach(function(val){
//     sum += val;
// })
// console.log(sum);

// const nums = [5, 10, 15];
// nums.forEach(function(val){
//     console.log(val);
// })

// const names = ["rahim", "karim", "abdul"];
// let printenName = names.forEach(function(name){
//     console.log(name.toUpperCase());
// });


// const nums = [1, 2, 3, 4, 5, 6];
// nums.forEach(num => {
//       if(num % 2 === 0){
//         console.log(num);
//       }
// })

// const words = ["apple", "kiwi", "banana"];

// let lengths = [];
// words.forEach(word => {
//     lengths.push(word.length);
// })
// console.log(lengths);

// const flags = [true, false, true, true, false];
// let trueCount = 0;
// flags.forEach(flag => {
//     if(flag === true){
//         trueCount++;
//     }
// });
// console.log(trueCount);

// const users = [
//   { name: "Rahim", age: 20 },
//   { name: "Karim", age: 25 }
// ];

// users.forEach(user => {
//     console.log(user.name);
// });

// const users = [
//   { name: "A", age: 15 },
//   { name: "B", age: 22 },
//   { name: "C", age: 17 }
// ];
// let adult = [];
// users.forEach(user => {
//     if(user.age >= 18){
//         adult.push(user.name);
//     }
// })
// console.log(adult);

// const products = [
//   { name: "A", price: 100 },
//   { name: "B", price: 200 },
//   { name: "C", price: 300 }
// ];
// let sum = 0;
// products.forEach(product => {
//        sum += product.price;
// });
// console.log(sum);

// const products = [
//   { name: "A", price: 100 },
//   { name: "B", price: 200 }
// ];

// let discountedPrice = [];
// products.forEach(product => {
//     discountedPrice.push({
//         name: product.name,
//         price: product.price * 0.9
//     })
// });
// console.log(discountedPrice);

// /// map() method

// let numbers = [1, 2, 3 , 4,];

// let newArr = numbers.map(function (num){
//     return num * 2;
// });
// console.log(newArr);

// const names = ["rahim", "karim", "abdul"];
// let upperCaseNames = names.map((name) => name.toUpperCase());
// console.log(upperCaseNames);

// const words = ["apple", "kiwi", "banana"];
// let lengths = words.map((word) => word.length);
// console.log(lengths);

// const nums = [1, 2, 3];
// let strings = nums.map((num) => num.toString());
// console.log(strings);

// const nums = [2, 3, 4];
// let squares = nums.map((num) => num * num);
// console.log(squares);

// const flags = [true, false, true];
// let toggle = flags.map((flag) => !flag);
// console.log(toggle);

// const users = [
//   { name: "Rahim", age: 20 },
//   { name: "Karim", age: 25 }
// ];
// let userNames = users.map((user) => user.name);
// console.log(userNames);

// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 25 }
// ];
// let userUpdateData = [];
// let userInfo = users.map((user) => ({
//         name: user.name,
//         age: user.age + 1
//     }));
// console.log(userUpdateData);

// const products = [
//   { name: "A", price: 100 },
//   { name: "B", price: 200 }
// ];
// let discountedProducts = products.map((product) => ({
//     name: product.name,
//     price: product.price * 0.9
// }));
// console.log(discountedProducts);

// const users = [
//   { first: "Rahim", last: "Khan" },
//   { first: "Karim", last: "Ali" }
// ];

// let fullNames = users.map((user) => `${user.first} ${user.last}`);
// console.log(fullNames);

// const items = ["a", "b", "c"];
// let indexNum = items.map((item, index, items) => ({
//     value: item,
//     index: index
// }));
// console.log(indexNum);

/////// filter() method
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// const users = [
//     { name: "Alice", age: 22},
//     { name: "Bob", age: 17},
//     { name: "Charlie", age: 30}
// ]

// const adults = users.filter((user) => user.age >= 18);
// console.log(adults);

// const products = ["Laptop", "Phone", "Tablet", "Camera"];

// const searchTerm = "ph"; 
// const results = products.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
// console.log(results);

// const users = [
//   { name: "John", active: true },
//   { name: "Jane", active: false },
//   { name: "Mike", active: true }
// ];

// const activeUsers = users.filter((user) => user.active);
// console.log(activeUsers);

/////// reduce() method

// let arr = [1, 2, 3, 4, 5, 6];

// let ans = arr.reduce((acc, val ) => acc + val, 0);
// console.log(ans);

///////// find() method

// const array = [5, 12, 8, 130, 44];
// const fount = array.find((element) => element > 10);
// console.log(fount);

//// some() method

// const arr = [10, 24, 39, 78, 43];
// const find = arr.some((num) => num > 20);
// console.log(find);

/// every() method

// const arr = [10, 24, 39, 78, 43];
// const allGreaterThan20 = arr.every((num) => num >= 10);
// console.log(allGreaterThan20);

// const user = { name: "A" };
// const extra = { age: 22 };

// const merged = { ...user, ...extra };



///////// Objects 

// const person = {
//     name: "Dibosh",
//     Age: 24,
//     isStudent: true
// };

// console.log(person.name);
// console.log(person['Age']);
// delete person.Age;
// person.city = "Dhaka";
// console.log(person);

// //object can store function as value

// const user = {
//     name: "Dibosh Sarker",
//     age: 24,
//     greet: function(){
//         console.log("Hello");
//     }
// }
// user.greet();

// const user1 = {
//     name: "Sarker",
//     greet: function(){
//         console.log("Hello " + this.name);
//     }
// }
// user1.greet();

// // Nested Object( object can contain other objects)

// const student = {
//     Name: "Dibosh",
//     address: {
//         city: "Dhaka", 
//         country: "Bangladesh"
//     }
// };
// console.log(student.address.city);

// const car = {
//     brand: "Toyota",
//     mode: "Corolla",
//     year: 2024,
// };
// console.log(car.brand);
// car.color = "Red";
// console.log(car);
// car.year = 2025;
// console.log(car);

// const users = [
//   { name: "Dibosh", age: 22 },
//   { name: "Rahim", age: 25 },
//   { name: "Karim", age: 30 }
// ];
// console.log(users[0].name);

//////// Object destructuring

//  const user = {
//    name: "Dibosh",
//    age: 24, 
//  };

//// With destructuring we can extract the value from the object and assign it to a variable with the same name as the property of the object. It is a convenient way to extract values from objects and arrays.

//  const { name, age } = user;
//  console.log(name);
//  console.log(age);

//  // Rename Variable

//  const{ name: userName,} = user;
//  console.log(userName);

//  //// Default values

// const { country = "Bangladesh"} = user;
// console.log(country);
// console.log(user); 
// /////    for-in loop

// let obj = {
//   name: "Dibosh",
//   age: 24,
//   city: "Dhaka"
// };

// for(let key in obj){
//     console.log(key + ": " + obj[key]); 
// }

// let obj = {
//     name: "Trina",
//     age: 5,
//     email: "diboshsarker45@gmail.com",
// };
// //console.log(Object.keys(obj));
// //console.log(Object.entries(obj));
// //console.log(Object.values(obj));
// for (let [key, value] of Object.entries(obj)){
//   console.log(key, value);
// }

// let obj = {
//     name: "Dibosh",
//     age: 45,
//     email: "diboshsarker45@gmail.com",
// };

// let obj2 = {...obj, price: Infinity};
// console.log(obj2);

// let works = "None";
// let obj = {
//     name: "Dibosh",
//     age: 45,
//     email: "diboshsarker45@gmail.com",
//     address: {
//       city: "Dhaka",
//       country: "Bangladesh"
//     },
//     [works]: "Software Engineer"
// };
// let obj2 = {...obj};
// obj2.address.city = "Rajshahi";

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.address.city = "Rajshahi";
// console.log(obj2);

// let obj2 = structuredClone(obj);
// obj2.address.city = "Rajshahi";
// console.log(obj2);
// console.log(obj);
