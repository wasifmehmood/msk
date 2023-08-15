function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the string is a palindrome
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false; // Characters don't match, not a palindrome
        }
    }

    return true; // All characters match, it's a palindrome
}

// Example usage:
const input1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(input1)); // Output: true

const input2 = "race a car";
console.log(isPalindrome(input2)); // Output: false