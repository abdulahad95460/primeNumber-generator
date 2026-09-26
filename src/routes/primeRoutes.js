const express = require("express");
const generatePrimes = require("../controllers/primeController");

const router = express.Router();

router.get("/primes", generatePrimes);

module.exports = router;