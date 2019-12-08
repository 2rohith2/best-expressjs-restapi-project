describe('Testing Users Route', () => {
  test('Response within 200ms', async () => {
    const response = await global.server.get('/users');
    expect(response.statusCode).toBe(200);
  });
});