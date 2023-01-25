var string = "Welcome to the great";


var reverseEntireSentence = reverseBySeparator(string, "");


var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}