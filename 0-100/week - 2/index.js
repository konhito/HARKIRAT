//callbacks -> function passed inside the another function paratmeter!!!
//function argument
//dry - dont repeat yourself!!!
// function sq(n) {
//   return n * n;
// }
// function cube(n) {
//   return n * n * n;
// }

// function sumofsqure(a, b) {
//   let square1 = sq(a);
//   let square2 = sq(b);
//   return square1 + square2;
// }
// let ans = sumofsqure(2, 3);
// console.log(ans);

//better code with

// function sumofsqure(a, b, fu) {
//   let square1 = fn(a);
//   let square2 = fn(b);
//   return square1 + square2;
// }
