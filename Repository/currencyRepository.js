const db = require('../Database/database');

function create(name, ticker) {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO currencies (name, ticker) VALUES (?, ?)',
      [name, ticker],
      function (err) {
        if (err) return reject(err);

        resolve({
          id: this.lastID,
          name,
          ticker
        });
      }
    );
  });
}

function findAll() {
  return new Promise((resolve, reject) => {
    db.all(
      'SELECT * FROM currencies',
      [],
      (err, rows) => {
        if (err) return reject(err);

        resolve(rows);
      }
    );
  });
}

function findByTicker(ticker) {
  return new Promise((resolve, reject) => {
    db.get(
      'SELECT * FROM currencies WHERE ticker = ?',
      [ticker],
      (err, row) => {
        if (err) return reject(err);

        resolve(row);
      }
    );
  });
}

function updatePrice(ticker, price) {
  return new Promise((resolve, reject) => {
    db.run(
      'UPDATE currencies SET price = ? WHERE ticker = ?',
      [price, ticker],
      function (err) {
        if (err) {
          return reject(err);
        }

        resolve(this.changes);
      }
    );
  });
}

module.exports = {
  create,
  findAll,
  findByTicker,
  updatePrice
};