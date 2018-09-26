function countLetters(string){

  var objectLetter = {};
  var fullString = string.split(' ').join();

  for (var key of fullString){
    if (objectLetter[key]){
      objectLetter[key] ++;
    } else {
      objectLetter[key] = 1
    }
  }

return objectLetter

}

console.log(countLetters("lighthouse in the house"));