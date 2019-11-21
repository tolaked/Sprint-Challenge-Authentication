const request = require("supertest");

const Jokes = require("./jokes-router");
const db = require("../database/dbConfig");

beforeEach(async () => {
  await db("users").truncate();
});

describe("Jokes", () => {
  describe("[GET] / endpoint", () => {
    test("the db env is testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
});

describe("User model", () => {
  test("should be defined", () => {
    expect(Jokes).toBeDefined();
  });
});
