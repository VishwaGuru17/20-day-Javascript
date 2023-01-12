function cntSquares(n)
    {
        let squares = 0;
        for (let i = 1; i <= n; i++)
        {
            squares += Math.pow(i, 2);
        }
        return squares;
    }
     
    let n = 4;
   
      document.write(cntSquares(n));
             