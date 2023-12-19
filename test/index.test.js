const request = require('supertest');
const app = require('../src/index');

it('should Hello world', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello world');
});
