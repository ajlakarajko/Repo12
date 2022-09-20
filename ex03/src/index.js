function rangeOfNumbers(startN, endN) {
    if (startN > endN) {
        return "The starting number will always be less than or equal to the ending number";
    }
    if (startN - endN === 0) {
        return [startN];
    } else {
        const numbers = rangeOfNumbers(startN + 1, endN);
        console.log(numbers);
        numbers.unshift(startN);
        return numbers;
    }
}
rangeOfNumbers(1, 7);
console.log(rangeOfNumbers(1, 7));
module.exports = rangeOfNumbers;
