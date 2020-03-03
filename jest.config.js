const path = require('path')

module.exports = {
  rootDir: path.join(__dirname),
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  projects: [
    './packages/webapp/jest.config.js',
    './packages/express_lambda/jest.config.js',
    './packages/graphql_lambda/jest.config.js',
  ],
}
