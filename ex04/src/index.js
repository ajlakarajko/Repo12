function sumFibonacci(num) {
    var arrFibonnaci = [
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
        2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418,
        317811,
    ];
    var sum = 0;
    for (i = 0; i < arrFibonnaci.length; i++) {
        if (arrFibonnaci[i] % 2 !== 0 && arrFibonnaci[i] <= num) {
            sum += arrFibonnaci[i];
        } else if (num === 1) {
            sum = 1;
        }
    }
    return sum;
}
sumFibonacci(20);
console.log(sumFibonacci(20));
module.exports = sumFibonacci;
