const fs = require('fs');
const { setupStrapi, cleanupStrapi } = require("./helpers/strapi");

jest.setTimeout(150000);
beforeAll(async () => {
  await setupStrapi();
});

afterAll(async () => {
  await cleanupStrapi();
});

it("strapi is defined", () => {
  expect(strapi).toBeDefined();
});

require('./auth');
require('./devices');
