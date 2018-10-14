describe('GET /users', () => {
  it('should return a user', (done) => {
    request.get('/user').expect(200, done);
  });
});
