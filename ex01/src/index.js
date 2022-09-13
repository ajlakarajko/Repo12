// Only change code below this line
function myRecursion(arr, n) {
    if (n <= 0) {
    return 1;
    } else {
    return multiply(arr, n - 1) * arr[n - 1];
    }
    }
// Only change code above this line
console.log(myRecursion()); // Change this line
module.exports = myRecursion;