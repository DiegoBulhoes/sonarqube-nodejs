import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);

describe('GET /users', () => {
  it('should return a user', (done) => {
    request.get('/user').expect(200, done);
  });
});
