const addUp = (n) => {
    if (n < 0 || typeof(n) !== "number") {
      return "Enter any positive number between 1 and 1000."
    } else {
     let a = 0;
     let b = 1;
     for (let i = 0; i < n; i++) {
      a += b;
      b += 1;
     }
     return a;
    }
    
  };
  
  console.log(addUp(8));
  console.log(addUp(17));
  console.log(addUp(900));
  console.log(addUp(0));
  console.log(addUp(1));
  console.log(addUp(-3));
  console.log(addUp(3));
  console.log(addUp(1500));