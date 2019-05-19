module.exports = {
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
  },

  watch: true,

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
