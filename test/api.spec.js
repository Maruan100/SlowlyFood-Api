const request = require('supertest');
const app = require('../src/app.js');


describe("GET /articles", () => {
  it("should return articles list", (done) => {
    request(app)
      .get("api/articles")
      .expect(200)
      .expect("Content-Type", /json/)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
