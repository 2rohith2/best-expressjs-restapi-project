// Global Pattern
test('Get Users Route', async () => {
  const response = await global.server.get('/login');
  expect(response.status).toBe(200);
});

// Individual Pattern, but unable to shutdown the ExpressJs before next test case execution

// import app from '../bin/www';
// import supertest from 'supertest';
// const request = supertest(app);

// test('Get Users Route', async (done) => {
//   const response = await request.get('/login');
//   expect(response.status).toBe(200);
//   done();
// });