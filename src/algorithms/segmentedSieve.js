function generatePrimes(start, end) {

  if(end < 2 || start > end) {
    return [];

  }

     const limit = Math.floor(Math.sqrt(end))


     const basePrimes = [];
   const isPrime = new Array(limit + 1).fill(true);

if(limit >= 0) isPrime[0] = false;

if(limit >= 1) isPrime[1] = false

  for(let number = 2; number * number <= limit; number++){

if(isPrime[number]) {
      for (
     let multiple = number * number;
          multiple <= limit;
 multiple += number
      ) {
           isPrime[multiple] = false;
      }
    }
  }

 for(let number = 2; number <= limit; number++) {
    if(isPrime[number]) {
      basePrimes.push(number);
}
  }

const primes = []
const segmentStart = Math.max(2, start);
const segment = new Array(end - segmentStart + 1).fill(true);

  for(const prime of basePrimes){
    let firstMultiple = Math.max(
      prime * prime,
      Math.ceil(segmentStart / prime) * prime
    )

    for(let multiple = firstMultiple; multiple <= end; multiple += prime) {
      segment[multiple - segmentStart] = false;
    }
 }

  for(let i = 0; i < segment.length; i++){
    if (segment[i]) {
      primes.push(segmentStart + i);
    }
  }

  return primes;
}

module.exports = generatePrimes;