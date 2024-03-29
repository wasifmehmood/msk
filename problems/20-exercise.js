function isPrime(number){

    for(let factor = 2; factor < number; factor++)
        if(number % factor === 0)
            return false;

    return true;
}

function showPrimes(limit) {

    for(let number = 2; number <= limit; number++){
        if(isPrime(number)) console.log('Prime Number: ', number);    
    }
}

showPrimes(20);