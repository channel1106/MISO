const readline = require('readline');

console.log("Input two non-negative integers");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  var input = line.split(" ");

  if(isNaN(input[0]) || isNaN(input[1]))
    console.log("Input is not integer");
  else{
    if(input[0].charAt(0) == '-' || input[1].charAt(0) == '-')
        console.log("Input is negative integer");
    else
        console.log("Sum : " + (Number(input[0]) + Number(input[1])));
  }

  rl.close();
}).on("close", function() {
  process.exit();
});