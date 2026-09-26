const test = require("node:test");
const assert = require("node:assert");

const trialDivision = require("../src/algorithms/trialDivision");

const sieveOfEratosthenes = require("../src/algorithms/sieveOfEratosthenes");

const oddOnlySieve = require("../src/algorithms/oddOnlySieve");

const segmentedSieve = require("../src/algorithms/segmentedSieve");

const algorithms=[
  ["Trial Division", trialDivision],
  ["Sieve of Eratosthenes", sieveOfEratosthenes],
  ["Odd-Only Sieve", oddOnlySieve],
  ["Segmented Sieve", segmentedSieve],
];

for(const [name, generatePrimes] of algorithms){
  test(`${name} - generates primes correctly`, () => {
    assert.deepStrictEqual(generatePrimes(1, 30), [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29
    ]);
  });

test(`${name} - handles range without primes`, () => {
    assert.deepStrictEqual(generatePrimes(14, 16), []);
  });

  test(`${name} - handles negative range`, () => {
    assert.deepStrictEqual(generatePrimes(-10, 2), [2]);
  });

 test(`${name} - handles single number`, () => {
    assert.deepStrictEqual(generatePrimes(7, 7), [7]);
  });
}