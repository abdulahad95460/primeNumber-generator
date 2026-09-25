const readline = require("readline");

const trialDivision = require("./algorithms/trialDivision");
const sieveOfEratosthenes = require("./algorithms/sieveOfEratosthenes");
const oddOnlySieve = require("./algorithms/oddOnlySieve");
const segmentedSieve = require("./algorithms/segmentedSieve");

const strategies ={
1:{

  name: "Trial Division",
 generate: trialDivision,
  },
2:{
  name: "Sieve of Eratosthenes",
  generate: sieveOfEratosthenes,
  },
3:{
    name: "Odd-Only Sieve",
    generate: oddOnlySieve,
  },
4: {
  name: "Segmented Sieve",
generate: segmentedSieve,
  },
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Prime Number Generator");
console.log("----------------------");
console.log("Available strategies:");
console.log("1. Trial Division");
console.log("2. Sieve of Eratosthenes");
console.log("3. Odd-Only Sieve");
console.log("4. Segmented Sieve");

rl.question("Select a strategy: ", (strategyInput) => {
  const strategy = strategies[strategyInput];

if (!strategy) {
  console.log("Invalid strategy selected.");
  rl.close();
  return;
}

 rl.question("Enter the starting number: ", (startInput) => {
  rl.question("Enter the ending number: ", (endInput) => {
   const start = Number(startInput);
    const end = Number(endInput);

    if(!Number.isInteger(start) || !Number.isInteger(end)) {
   console.log("Please enter valid integers.");
  rl.close();
  return;
 }

    if(start > end) {
        console.log(
          "Starting number must be less than or equal to ending number."
        );
        rl.close();
        return;
  }

    if(end - start > 1000000) {
  console.log("Range is too large. Please enter a smaller range.");
  rl.close();
  return;
}

  const primes = strategy.generate(start, end);

  console.log(`\nStrategy: ${strategy.name}`);
  console.log(`Prime numbers between ${start} and ${end}:`);
  console.log(primes.join(", "));

      rl.close();
    });
  });
});