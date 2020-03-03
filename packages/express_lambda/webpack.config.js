const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/',
  output: {
    filename: 'handler.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.mjs'],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: './.babelrc',
            },
          },
        ],
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },

      // Configure loader for gql / graphql files
      // {
      //   test: /\.(graphql|gql)$/,
      //   exclude: /node_modules/,
      //   loader: 'graphql-tag/loader',
      // },
    ],
  },

  plugins: [],
};
