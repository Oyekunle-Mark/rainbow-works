import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

module.exports = {
  mode: 'development',
  entry: 'src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0', 'react']
          }
        }]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'src/index.html'
  })
  ]
};
