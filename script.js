console.log(42);
console.log(-45);
console.log(1.2);
console.log(-8 / 3);
console.log(0xab);
console.log(2e3); // 2 * 10 = 20; 20 * 10 = 200; 200 * 10 = 2000;
console.log(typeof NaN); // Not a number
console.log(2 / "jgvfdkjvb");
console.log(123 / 0);

var fortyTwo = 42;
var delta = 8 / 3;
console.log(fortyTwo.toString());
console.log((8 / 3).toFixed(1));
console.log((+delta).toFixed(4)); //string
console.log((8 / 3).toFixed(3));
console.log((8 / 3).toFixed());

console.log(+delta.toFixed(1) + 4);
console.log(parseFloat(delta.toFixed(2))); // 2.67
console.log(parseInt(delta.toFixed(2))); // 2

console.log(isNaN(NaN));
console.log(isNaN(45));

console.log(isFinite(1 / 0));
console.log(isFinite(999999999999999999));
