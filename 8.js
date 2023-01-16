var obj = [
    {
       isEmployed: true
    },
    {
       isEmployed: false
    },
    {
       isEmployed: true
    },
    {
        isEmployed: true
    },
    {
       isEmployed: false
    }
 ]
 function numberOfTrueValues(obj) {
    var counter = 0;
    for (var index = 0; index < obj.length; index++) {
       if (obj[index].isEmployed === true) {
          counter++;
       }
    }
    return counter;
 }
 function numberOfFalseValues(obj) {
    var counter = 0;
    for (var index = 0; index < obj.length; index++) {
       if (obj[index].isEmployed === false) {
          counter++;
       }
    }
    return counter;
 }
 console.log("Number Of true values=" + numberOfTrueValues(obj));
 console.log("Number Of false values=" + numberOfFalseValues(obj));