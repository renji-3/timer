let ass = process.argv.slice(2);

let time = ass.filter('');

for (let i = 0; i < time.length; i++) {
  if (time < 0) {
    continue;
  } else {
    setTimeout(() => {
      process.stdout.write(`BEEP AT ${time[i]} SECONDS     `);
    }, time[i] * 1000);
  }
}

// for (let i = 0; i < time.length; i++) {
//   setTimeout(() => {
//     console.log(`BEEP AT ${time[i]} SECONDS     `);
//   }, time[i] * 1000);
// }
// above makes output on separate lines

setTimeout(() => {
  process.stdout.write('\n');
}, time * 1000);