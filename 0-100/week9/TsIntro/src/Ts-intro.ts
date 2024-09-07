// TS is a programing lang by microsoft - superset of js
//how ts code runs
// ts not run on browser -> its never runs at all its gets transpiled to js
//And js runs
//catch error on compilation
// npx is node package excuetable

// **SUPERSET OF JS**

const x: number = 1; // string , null ,undefined ,boolean
console.log(x);
function Hello(y: string) {
  console.log("Hello " + y);
}
Hello("a");

function Sum(x: number, y: number) {
  console.log(x + y);
}
Sum(1, 2);

const age: number = 10;

function ageChecker(x: number): boolean {
  // this extra :boolean here will make sure it will return a boolean not a anything else.
  if (x >= 18) return true;
  return false;
}

const a = ageChecker(age);

console.log(a);

async function setTime(fn: () => void) {
  await setTimeout(fn, 1000);
}

setTime(function () {
  console.log("Hii after 1 sec");
});

const newsl = (c: number) => `hello ${c}`;
console.log(newsl(2));
