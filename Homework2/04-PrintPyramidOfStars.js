let pyramidOfStars = (lines) => {
   let char = ""
    for (let row = 1; row <= lines; row++) {
      for (let col = 0; col < row; col++) {
        char += ('* ')
      }
      console.log(char);
      char = "";
   }
}
pyramidOfStars(5);