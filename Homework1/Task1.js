function printTheWinner(arrCommands) {
   let result = arrCommands[Math.floor(Math.random()*arrCommands.length)];
   console.log(result); 
}

printTheWinner(["rock", "paper","scissors"]);

