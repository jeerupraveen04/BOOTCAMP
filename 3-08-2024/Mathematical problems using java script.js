function checkOddEven() {
    const num = document.getElementById('oddEvenInput').value;
    const result = document.getElementById('oddEvenResult');
    if (num === "") {
        result.textContent = "Please enter a number.";
        return;
    }
    if (num % 2 === 0) {
        result.textContent = `${num} is even.`;
    } else {
        result.textContent = `${num} is odd.`;
    }
}

function calculateFactorial() {
    const num = document.getElementById('factorialInput').value;
    const result = document.getElementById('factorialResult');
    if (num === "" || num < 0) {
        result.textContent = "Please enter a non-negative number.";
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    result.textContent = `Factorial of ${num} is ${factorial}.`;
}

function checkPalindrome() {
    const str = document.getElementById('palindromeInput').value;
    const result = document.getElementById('palindromeResult');
    if (str === "") {
        result.textContent = "Please enter a string.";
        return;
    }
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    if (cleanedStr === reversedStr) {
        result.textContent = `"${str}" is a palindrome.`;
    } else {
        result.textContent = `"${str}" is not a palindrome.`;
    }
}
