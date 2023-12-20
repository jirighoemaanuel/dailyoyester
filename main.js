const fs = require('fs');

fs.writeFileSync('message.txt', 'Hello from NodeJS!', (err) => {
  if (err) throw err;
  console.log('The file has been save');
});

const message = fs.readFileSync('message.txt', 'utf-8');
console.log(message);
