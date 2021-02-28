const CopyPlugin = require('copy-webpack-plugin');

const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'api/test.php', to: 'test.php' }],
    }),
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    stats: 'minimal',
    historyApiFallback: true,
    writeToDisk: true,
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
})
