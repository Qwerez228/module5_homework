let arr = ["NaN" , "null" , "string"];
function identical(arr) {
    for(let i = 0; i <= arr.length - 1; i++) {
        if(arr[i] !== arr[i+1]) {
            return false;

        }
    }
    return true;

}
console.log(identical(arr));


