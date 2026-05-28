const app = require('../appStart');
const http = require('http');

let server;

beforeAll(() => {
  server = app.listen(3001);
});

afterAll(() => {
  server.close();
});

test('GET /status should return ok', done => {
  http.get('http://localhost:3001/status', res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      expect(res.statusCode).toBe(200);
      expect(data).toBe('ok');
      done();
    });
  });
});