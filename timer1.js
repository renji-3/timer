let ass = process.argv.slice(2);
let digits = new RegExp(/\d/);

let time = ass
  .map((item) => item = Number(item)) // turn strings into numbers and letters into NaN
  .filter((item) => digits.test(item)) // removes NaN
  .filter((item) => item > 0); // removes negative numbers

console.log(time);


// for (let i = 0; i < time.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(`BEEP AT ${time[i]} SECONDS     `);
//   }, time[i] * 1000);
// }

// above code outputs on same line

for (let i = 0; i < time.length; i++) {
  setTimeout(() => {
    console.log(`BEEP AT ${time[i]} SECONDS     `);
  }, time[i] * 1000);
}
// above code outputs on separate lines

setTimeout(() => {
  process.stdout.write('\n');
}, time * 1000);