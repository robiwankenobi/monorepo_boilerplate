const path = require('path');

module.exports = {
  displayName: 'gql_federation',
  rootDir: path.join(__dirname),
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  collectCoverageFrom: [
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
  coveragePathIgnorePatterns: ['.*/__tests__/.*'],
};
