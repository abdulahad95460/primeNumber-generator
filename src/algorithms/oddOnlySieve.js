function generatePrimes(start, end){

  if (end < 2 || start > end){
    return [];

  }

  const primes = [];

  if(start <= 2 && end >= 2) {

    primes.push(2)

  }

  const firstOdd = Math.max(3, start % 2 === 0 ? start + 1 : start);


    const size = Math.floor((end - firstOdd) / 2) + 1;


if(size <= 0){
    return primes
  }

  const isPrime = new Array(size).fill(true);

     for (let i = 0; i < size; i++) {

   const number = firstOdd + i * 2;

  if(number * number > end){
      break;
    }

if(isPrime[i]) {

 const firstMultiple =
     Math.max(number * number, Math.ceil(firstOdd / number) * number);

     for(let multiple = firstMultiple; multiple <= end; multiple += number) {
    if (multiple % 2 !== 0) {
          const index = (multiple - firstOdd) / 2;
          isPrime[index] = false;
      }
   }
}
  }

  for(let i = 0; i < size; i++){
    if (isPrime[i]) {
      primes.push(firstOdd + i * 2);
  }
  }

  return primes;
}

module.exports = generatePrimes;