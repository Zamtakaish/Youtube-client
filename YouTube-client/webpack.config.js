module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',

  },

  mode: 'development',

  watch: true,

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },

    ],
  },
};
