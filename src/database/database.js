const Database = require("better-sqlite3");

const db = new Database("prime-generator.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS api_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT NOT NULL,
    start INTEGER NOT NULL,
    end INTEGER NOT NULL,
    algorithm TEXT NOT NULL,
    elapsedTimeMs REAL NOT NULL,
    primesReturned INTEGER NOT NULL
  )
`);

module.exports = db;