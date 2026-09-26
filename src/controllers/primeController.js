const db = require("../database/database");
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

const startTime = process.hrtime.bigint();

const primes = selectedAlgorithm(startNumber, endNumber);

const endTime = process.hrtime.bigint();

const elapsedTimeMs =
  Number(endTime - startTime) / 1_000_000;

db.prepare(`
  INSERT INTO api_logs (
    timestamp,
    start,
    end,
    algorithm,
    elapsedTimeMs,
    primesReturned
  )
  VALUES (?, ?, ?, ?, ?, ?)
`).run(
  new Date().toISOString(),
  startNumber,
  endNumber,
  algorithm || "trial",
  elapsedTimeMs,
  primes.length
);

res.json({
  start: startNumber,
  end: endNumber,
  algorithm: algorithm || "trial",
  primes,
});

}

module.exports = generatePrimes;