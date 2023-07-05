const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/drag_and_drop/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/drag_and_drop'),
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  Plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
