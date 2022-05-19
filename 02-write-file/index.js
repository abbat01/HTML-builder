const path = require('path');
const fs = require('fs');
const {
  stdin,
  stdout,
  exit
} = require('process');
const stream = fs.createWriteStream(path.join(__dirname, 'result.txt'));
stdout.write('Hi, ask your question...\n');
stdin.on('data', message => {
  if (message.toString().trim() === 'exit') {
    close();
  } else {
    stream.write(message);
  }
});
function close () {
  stdout.write('Thanks you, goodbye');
  exit();
}
