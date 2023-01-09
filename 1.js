function findNthOccur(str, ch, N)
{
    var occur = 0;
 
    // Loop to find the Nth
    // occurrence of the character
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ch) {
            occur += 1;
        }
        if (occur == N)
            return i;
    }
    return -1;
}
 
var str = "Week";
    var ch = 'e';
    var N = 2;
    document.write( findNthOccur(str, ch, N));