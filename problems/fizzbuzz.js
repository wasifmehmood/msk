// The task is simple: Print integers one-to-N, but print “Fizz” if an 
// integer is divisible by three, “Buzz” if an integer is divisible by 
// five, and “FizzBuzz” if an integer is divisible by both three and five


function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15);