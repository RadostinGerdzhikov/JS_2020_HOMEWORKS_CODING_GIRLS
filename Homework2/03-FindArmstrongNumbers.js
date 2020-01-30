let returnArmStrongNumbersFrom100To999 = 
() => {
    let strongNumbers = [];
    for (let i = 100; i <= 900; i++) {
        let arrNum = [...String(i)];
        let result = 0;
        arrNum.forEach(num => {
        result += num ** 3; // ** 3 sum of the cubes
    })
    
    if (result === i) {
        strongNumbers.push(result);
    }
    
  }
   
    return strongNumbers.join('\n');
    
}

console.log(returnArmStrongNumbersFrom100To999());