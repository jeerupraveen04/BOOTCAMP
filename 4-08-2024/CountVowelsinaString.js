const vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]

function countVowel(str) {
    let count = 0;
    for (let letter of str) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    console.log(count)
}
const string ="praveen";
countVowel(string);