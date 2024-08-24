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
//
// sync - means things are happening one after another. sequentials.
// async - wait for the task to compelet and(not until we add await) hold the thread there.
// 1.read a file 2.fetch 3.setTimeout are a async function
// simple async example

// function onDone() {
//   console.log("hii there!!"); <- this thing waited 2 sec to be excuted
// }
// setTimeout(onDone, 2000);
// console.log("after 2 sec"); <- this thing excuted immediatly

// promises -> more readable to write callbacks
// also a class js provides you out of the box.
// function myOwnSetTimeout(duration) {
//   let p = new Promise(function (resolve) { <- it expects a function and first paramerter in the function is the resolve
//     setTimeout(resolve, 2000);
//   });
//   return p;
// }

// myOwnSetTimeout(1000).then(() => {
//   console.log("log it first ");
// });
