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

(function init(){
    console.log("Intialization");
})();