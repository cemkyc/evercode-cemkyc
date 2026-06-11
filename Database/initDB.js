const sqlite3 = require('sqlite3').verbose();
const log = require('../Logger/logger');
const db = require('./database');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS currencies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      ticker TEXT NOT NULL UNIQUE,
      price REAL
    )
  `);

  log.info("Database initialized");
});

db.close();