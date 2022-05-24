const path = require('path');
const readline = require('readline');
const fs = require('fs');
const {
  stdin,
  stdout,
  stdin: input,
  stdout: output,
  exit} = require('process');
const stream = fs.createWriteStream(path.join(__dirname, 'result.txt'));
const rl = readline.createInterface({ input, output });
stdout.write('Hi, ask your question...\n');
stdin.on('data', message => {
  if (message.toString().trim() === 'exit') {
    close();
  } else {
    stream.write(message);
  }
});
rl.on('SIGINT', () => {
  console.log('Goodbye! Exit of program by `Ctrl + C`');
  rl.close();
});
function close () {
  stdout.write('Thanks you, goodbye');
  exit();
}

