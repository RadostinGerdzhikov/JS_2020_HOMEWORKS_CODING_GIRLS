let printFactorial = num => {
  if(num < 1){
      return;
   }

   let factorial = 1;
   for (let i = 2; i <= num; i++) {
     factorial *= i;
   }

   return factorial;

}

console.log(printFactorial(5));