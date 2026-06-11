const db = require('../Database/database');

describe('Currency DB tests', () => {

  beforeAll((done) => {
    db.run(`
      CREATE TABLE IF NOT EXISTS currencies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        ticker TEXT UNIQUE
      )
    `, done);
  });

  beforeEach((done) => {
    db.run('DELETE FROM currencies', done);
  });

  afterAll((done) => {
    db.close(done);
  });

  test('создание валюты в БД', (done) => {
    db.run(
      'INSERT INTO currencies (name, ticker) VALUES (?, ?)',
      ['Bitcoin', 'BTC'],
      function (err) {
        expect(err).toBeNull();
        expect(this.lastID).toBeDefined();
        done();
      }
    );
  });

  test('получение валюты из БД', (done) => {
    db.run(
      'INSERT INTO currencies (name, ticker) VALUES (?, ?)',
      ['Ethereum', 'ETH'],
      function () {

        db.get(
          'SELECT * FROM currencies WHERE ticker = ?',
          ['ETH'],
          (err, row) => {
            expect(err).toBeNull();
            expect(row).toBeDefined();
            expect(row.ticker).toBe('ETH');
            expect(row.name).toBe('Ethereum');
            done();
          }
        );

      }
    );
  });

  test('удаление валюты из БД', (done) => {
    db.run(
      'INSERT INTO currencies (name, ticker) VALUES (?, ?)',
      ['Litecoin', 'LTC'],
      function () {

        db.run(
          'DELETE FROM currencies WHERE ticker = ?',
          ['LTC'],
          function (err) {
            expect(err).toBeNull();
            expect(this.changes).toBe(1);
            done();
          }
        );

      }
    );
  });

});

