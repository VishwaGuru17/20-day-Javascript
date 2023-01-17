function squareDigitSum(number)
{
    var summ = 0;
    var num = parseInt(number);
   
    var squareNum = num * num;
 
    while (squareNum > 0)
    {
        summ = summ + (squareNum % 10);
        squareNum = parseInt(squareNum / 10);
    }
    return summ;
}
 