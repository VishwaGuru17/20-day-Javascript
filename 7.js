const int = (n, a, b) => {
    if (n === parseInt(n) && n >= a && n < b) {
      return true;
    } return false;
  };
  
  console.log(int(3, 1, 9));
  console.log(int(6, 1, 6));
  console.log(int(4.5, 3, 8));