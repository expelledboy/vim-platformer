// jest.config.js
module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js"],
  testEnvironment: "jsdom",
  setupFiles: ["./jest.setup.js"],
  testMatch: ["**/src/**/*.test.js"],
  verbose: true,
};
