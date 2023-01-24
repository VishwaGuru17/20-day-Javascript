println(factorial(70));

function factorial(n)
{
    let prod = "1";
    
    for(let i = 2; i <= n; i++)
    {
        prod = mult(prod, i.toString());
    }
    
    return prod;
}

function mult(sNumber1, sNumber2)
{
  
    let partialResults = [];
    
    for(let i = sNumber2.length - 1; i >= 0; i--)
    {
        let digit = parseInt(sNumber2[i]);
        
        let partialResult = multDigit(sNumber1, digit);
        partialResult += "0".repeat(partialResults.length);
        
        partialResults.push(partialResult);
    }
    
    
    let sum = "";
    
    for(let r of partialResults)
    {
        sum = add(sum, r);
    }
    
    return sum;
}

// Multiplies number sNumber (as string) with a single digit number
function multDigit(sNumber, digit)
{
    let p = "";
    let carry = 0;
    
    for(let i = sNumber.length - 1; i >= 0; i--)
    {
        let numberDigit = parseInt(sNumber[i]);
        
        let prod = digit * numberDigit + carry;
        let prodDigit = prod % 10;
        carry = Math.floor(prod / 10);
        
        p = prodDigit.toString() + p;
    }
    
    if (carry > 0)
        p = carry + p;
        
    return p;
}

function add(sNumber1, sNumber2)
{
    let maxSize = Math.max(sNumber1.length, sNumber2.length);
    
    let s1 = sNumber1.padStart(maxSize, "0");
    let s2 = sNumber2.padStart(maxSize, "0");

    let s = "";
    let carry = 0;
    
    for(let i = maxSize - 1; i >= 0; i--)
    {
        let digit1 = parseInt(s1[i]);
        let digit2 = parseInt(s2[i]);
        
        let sum = digit1 + digit2 + carry;
        let digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;

        s = digitSum.toString() + s;
    }
    
    if (carry > 0)
        s = carry + s;
    
    return s;
}