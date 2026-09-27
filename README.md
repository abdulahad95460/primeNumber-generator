# Prime Number Generator

A Node.js application that generates prime numbers using multiple algorithms and exposes the functionality through both a CLI and REST API.

## Features

- Generate prime numbers within a given range
- Four different prime-generation strategies
- CLI with algorithm selection
- REST API
- Input validation and error handling
- Unit tests using Node.js built-in test runner
- SQLite database logging for API executions
- Execution time measurement

## Algorithms

1. Trial Division
2. Sieve of Eratosthenes
3. Odd-Only Sieve
4. Segmented Sieve

## Installation

Clone the repository and install dependencies:

```bash
npm install
CLI Usage

Run:

node src/cli.js

The CLI allows you to select one of the four algorithms and enter a range.

Running the API

Start the server:

node src/server.js

The server runs on:

http://localhost:3000
API Endpoint
GET /api/primes
Query Parameters
start - Starting number
end - Ending number
algorithm - Algorithm to use

Available algorithms:

trial
sieve
oddSieve
segmented
Example
GET /api/primes?start=1&end=30&algorithm=sieve
Example Response
{
  "start": 1,
  "end": 30,
  "algorithm": "sieve",
  "primes": [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29
  ]
}
API Execution Logging

Each successful API execution is stored in SQLite with:

Timestamp
Start number
End number
Algorithm used
Execution time in milliseconds
Number of primes returned
Testing

Run all unit tests:

node --test

The project currently contains 16 unit tests covering all four algorithms.

Technologies
Node.js
Express.js
SQLite
JavaScript