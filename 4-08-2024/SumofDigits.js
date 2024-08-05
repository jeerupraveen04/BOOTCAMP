function sumOfDigits(num) {
    const digits = num.toString().split('');
    return digits.reduce((sum, digit) => sum + parseInt(digit), 0);
  }

const number = 1234;
console.log(sumOfDigits(number));
  