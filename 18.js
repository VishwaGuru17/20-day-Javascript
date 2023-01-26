var firstWord = "Vishwa";
var secondWord = "awhas";

isAnagram(firstWord, secondWord); 

function isAnagram(first, second) {

  var a = first.toLowerCase();
  var b = second.toLowerCase();

 
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}