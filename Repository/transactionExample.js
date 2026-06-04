const db = require('../Database/database');

function addTwoCurrencies(a, b) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run('BEGIN TRANSACTION');

      db.run(
        'INSERT INTO currencies (name, ticker) VALUES (?, ?)',
        [a.name, a.ticker]
      );

      db.run(
        'INSERT INTO currencies (name, ticker) VALUES (?, ?)',
        [b.name, b.ticker]
      );

      db.run('COMMIT', (err) => {
        if (err) {
          db.run('ROLLBACK');
          return reject(err);
        }

        resolve(true);
      });
    });
  });
}

module.exports = { addTwoCurrencies };