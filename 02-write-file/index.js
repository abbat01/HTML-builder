const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const path = require('path');

const fileLocation = path.join(__dirname, 'text.txt');

const rl = readline.createInterface({ input, output });
const writeStream = fs.createWriteStream(fileLocation, 'utf8');
console.log('Hi! Ask your question:');
rl.on('line', (input) => {
  if(input !== 'exit') {
    writeStream.write(`${input}\n`);
  } else {
    console.log('Goodbye!');
    rl.close();
  }
});

rl.on('SIGINT', () => {
  console.log('Goodbye!');
  rl.close();
});
