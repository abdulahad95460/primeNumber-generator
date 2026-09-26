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

  
  for (let p = 3; p < firstOdd; p += 2) {
    let isP = true;
    for (let d = 3; d * d <= p; d += 2) if (p % d === 0) { isP = false;
       break; }
    if (!isP)
       continue;
    let firstMultiple = Math.ceil(firstOdd / p) * p;
    if (firstMultiple % 2 === 0) firstMultiple += p;
    if (firstMultiple === p) firstMultiple += p * 2;
    for (let m = firstMultiple; m <= end; m += p * 2) {
      const idx = (m - firstOdd) / 2;
      if (idx >= 0 && idx < size) isPrime[idx] = false;
    }
  }

     for (let i = 0; i < size; i++) {

   const number = firstOdd + i * 2;

  if(number * number > end){
      break;
    }

if(isPrime[i]) {

 for (
  let multiple = number * number;
  multiple <= end;
  multiple += number * 2
) {
  const index = (multiple - firstOdd) / 2;

  if (index >= 0 && index < size) {
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
