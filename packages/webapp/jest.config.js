const path = require('path');

module.exports = {
  displayName: 'webapp',
  rootDir: path.join(__dirname),
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  collectCoverageFrom: [
    './packages/**/src/**/*.js',
    './packages/**/src/**/*.ts',
    './packages/**/src/**/*.tsx',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
  coveragePathIgnorePatterns: ['**/__tests__/.*'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
