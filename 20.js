function print2largest(arr, arr_size) {
    let i, first, second;


    if (arr_size < 2) {
        document.write(" Invalid Input ");
        return;
    }

  
    arr.sort();


    for (i = arr_size - 2; i >= 0; i--) {
        
        if (arr[i] != arr[arr_size - 1]) {
            document.write("The second largest element is " + arr[i]);
            return;
        }
    }

    document.write("There is no second largest element<br>");
}



let arr= [ 12, 35, 1, 10, 34, 1 ];
let n = arr.length;
print2largest(arr, n);