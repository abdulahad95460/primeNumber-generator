const trialDivision = require("../algorithms/trialDivision")

const sieveOfEratosthenes = require("../algorithms/sieveOfEratosthenes")

const oddOnlySieve = require("../algorithms/oddOnlySieve");

const segmentedSieve = require("../algorithms/segmentedSieve")


const strategies = {
trial: trialDivision,
sieve: sieveOfEratosthenes,
 oddSieve: oddOnlySieve,
 segmented: segmentedSieve,
};

function generatePrimes(req, res) {
  const { start, end, algorithm } = req.query;

  const startNumber = Number(start);
  const endNumber = Number(end);

  if (!Number.isInteger(startNumber) || !Number.isInteger(endNumber)) {
    return res.status(400).json({
      message: "Start and end must be valid integers.",
  });
}

if(startNumber > endNumber){
    return res.status(400).json({
      message: "Start must be less than or equal to end.",
  });
}

const selectedAlgorithm = strategies[algorithm || "trial"];

if(!selectedAlgorithm) {
    return res.status(400).json({
      message: "Invalid algorithm.",
      availableAlgorithms: Object.keys(strategies),
    });
}

const primes = selectedAlgorithm(startNumber, endNumber);

res.json({
    start: startNumber,
    end: endNumber,
    algorithm: algorithm || "trial",
    primes,
  });
}

module.exports = generatePrimes;