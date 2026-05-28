const request = require('supertest');
const app = require('../app');

test('POST /currencies creates currency', async () => {
  const res = await request(app)
    .post('/currencies')
    .send({ name: 'Bitcoin', ticker: 'BTC' });

  expect(res.statusCode).toBe(201);
  expect(res.body.ticker).toBe('BTC');
});