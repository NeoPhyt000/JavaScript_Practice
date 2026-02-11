// for( let i = 1; i< 21; i++){
//     if( i % 2 === 0)
//     console.log(i);
// }

// for( let i = 10; i > 0; i--){
//     console.log(i);
// }

// let sum = 0;
// for (let i = 1; i < 51; i++){
//     sum = sum + i;
// }
// console.log(sum);

// let count = 0;
// for (let i = 1; i < 11; i++){
//     if(i * 7){
//         count++;
//         console.log(i * 7);
//     }
//     if(count > 10) break;
// }
// This one gives answer but pushed lot of unusual line of code that are not necessary

// let n = 7;
// for (let i = 1; i < 11; i++){
//     console.log(`${i} x ${n} = ${i * n}`);
// } This one is perfect easily doing approach

// let i = 1;
// let n = 7;
// while(i < 11){
//     console.log(`${i} x ${7} = ${i * 7}`);
//     i++;
// }

// let i = 1;
// let n = 7;

// do{
//     console.log(`${i} x ${n} = ${i * n}`);
//     i++;
// }

// while(i < 11);

// for (let i = 1; i < 31; i++){
//     if( i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//     else if ( i % 5 === 0) console.log("Buzz");
//     else if ( i % 3 === 0) console.log("Fizz");
//     else console.log(i);
// }

// let n = 5; 
// let fact = 1;

// for ( let i = 5; i >= 1; i--){
//     fact = fact * i;
// }
// console.log(fact);

// for ( let num = 2; num < 101; num++){
//     let isPrime = true;

//     for ( let i = 2 ; i < num; i++){
//         if ( num % i === 0){
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime){
//         console.log(num);
//     }
// }

// let num = 1234;
// let rev = 0;

// while( num > 0){
//     let lastDigit = num % 10;
//     rev = rev * 10 + lastDigit;
//     num = Math.floor(num / 10);
// }
// console.log(rev);


// Palindrome check(Like akta number reverse korle same thake kina)

// let number = 121;
// let original = number;
// let reverse = 0;

// while( number > 0) {
//     let lastDigit = number % 10;
//     reverse = reverse * 10 + lastDigit;
//     number = Math.floor(number/ 10);
// }

// if( original === reverse){
//     console.log("Palindrome");
// }
// else{
//     console.log("Not Palindrome");
// }

//Digit Sum
// let number = 234141134;
// let sum = 0;

// while( number > 0){
//     let lastDigit = number % 10;
//     sum = sum + lastDigit;
//     number = Math.floor(number / 10);
// }
// console.log(sum);

// let number = 132434;
// let count = 0;

// while( number > 0){
//       count++;
//       number = Math.floor(number/10);
// }

// console.log(count);

// for ( i = 1; i <=5; i++){
//   let star = "";

//   for(let j = 1; j<= i; j++){
//     star += "*";
//   }
//   console.log(star);
// }

// for ( i = 5; i >= 0; i--){
//   let star = "";

//   for(let j = 1; j <= i; j++){
//     star += "*";
//   }
//   console.log(star);
// }

for (i = 1; i <= 5; i++){
  let output = "";

  for( j = 1; j <= i; j++){
    output += j;
  }
  console.log(output);
}