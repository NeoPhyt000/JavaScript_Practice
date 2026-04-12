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

const radius = [1, 2, 3];

const area = (radius) => Math.PI * radius * radius;

const diameter = (radius) => 2 * radius;

const calculate = (radius, logic) => {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));