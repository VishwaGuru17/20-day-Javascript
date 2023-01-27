class circle {
    constructor (radius) {
      this.radius = radius;
    }
    getarea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    getperimeter() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  let circy = new circle(11);
  console.log(circy.getarea());
  console.log(circy.getperimeter());
  
  let circy1 = new circle(4.44);
  console.log(circy1.getarea());
  console.log(circy1.getperimeter());