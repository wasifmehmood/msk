// Given two binary strings a and b, return their sum as a binary string.

function addBinaryStrings(a, b) {
    let sum = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry !== 0) {
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;

        const currentSum = digitA + digitB + carry;
        const digitSum = currentSum % 2;
        carry = Math.floor(currentSum / 2);

        sum = digitSum + sum;

        i--;
        j--;
    }

    return sum;
}

// 10101 +
// 1110

// 100111
