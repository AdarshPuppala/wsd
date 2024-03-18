function countVowelsAndConsonants() {
    var inputString = document.getElementById("inputString").value.toLowerCase();
    var vowelCount = 0;
    var consonantCount = 0;
    var vowels = "aeiou";

    for (var i = 0; i < inputString.length; i++) {
        if (vowels.indexOf(inputString[i]) !== -1) {
            vowelCount++;
        } else if (inputString[i].match(/[a-z]/i)) {
            consonantCount++;
        }
    }

    document.getElementById("vowelCount").innerText = "Vowels: " + vowelCount;
    document.getElementById("consonantCount").innerText = "Consonants: " + consonantCount;
}
function checkPalindrome() {
    var inputPalindrome = document.getElementById("inputPalindrome").value;
    var reversedInput = inputPalindrome.split('').reverse().join('');

    if (inputPalindrome === reversedInput) {
        document.getElementById("palindromeResult").innerText = "Palindrome!";
    } else {
        document.getElementById("palindromeResult").innerText = "Not a Palindrome!";
    }
}
function calculateTotal() {
    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    var tipAmount = (subtotal * (tipPercentage / 100)).toFixed(2);
    var totalAmount = (subtotal + parseFloat(tipAmount)).toFixed(2);

    document.getElementById("totalAmount").innerText = "Total Amount (including tip): $" + totalAmount;
}
