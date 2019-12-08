describe('Testing Login Route', () => {
  test('Response within 200ms', async () => {
    const response = await global.server.get('/login');
    expect(response.statusCode).toBe(200);
  });
});