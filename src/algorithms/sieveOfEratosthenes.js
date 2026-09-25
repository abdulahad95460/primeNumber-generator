
  function generatePrimes(start, end) {

    if (end < 2 || start > end) {
   
     return [];

  }

  const limit = end;

  const isPrime = new Array(limit + 1).fill(true);


  isPrime[0] = false
  isPrime[1] = false;

     for (let number = 2; number * number <= limit; number++) {
       if (isPrime[number]) {

      for (let multiple = number * number; multiple <= limit; multiple += number) {
        isPrime[multiple] = false;
      }

    }
}

     const primes = [];

     for (let number = Math.max(2, start); number <= end; number++) {
if (isPrime[number]) {

      primes.push(number);
    }
  }

  return primes;
}

module.exports = generatePrimes;