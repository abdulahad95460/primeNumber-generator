       function generatePrimes(start, end) {

  const primes = [];

      for (let number = Math.max(2, start); number <= end; number++) {

 if (isPrime(number)) {
      primes.push(number);
    }
  }

  return primes;
}



  function isPrime(number) {

    if (number < 2) {
    return false;

  }

  if (number === 2) {

    return true;

  }

  if (number % 2 === 0) {

    return false;

  }

   for (let divisor = 3; divisor * divisor <= number; divisor += 2) {

 if (number % divisor === 0) {

      return false;
    }

  }

      return true;
}


module.exports = generatePrimes;