function myCounter(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = myCounter(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
myCounter(10);
console.log(myCounter(10));
module.exports = myCounter;
