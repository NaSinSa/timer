const stdin = process.stdin;
const stdout = process.stdout;
// for when user actually presses a digit from 1 -9
stdin.on('data', (key) => {
  // to exit out of program
  if (key === '\u0003') {
    process.exit();
  }
  stdout.write(`setting timer for ${key} seconds ... \n`);
  setTimeout(() => {
    stdout.write('\x07');
  }, key * 1000)
})