const sqlite3 = require('sqlite3').verbose();
const log = require('../Logger/logger');

const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS currencies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      ticker TEXT NOT NULL UNIQUE
    )
  `);

  log.info("Database initialized");
});

db.close();