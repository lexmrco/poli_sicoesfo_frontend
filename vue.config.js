const webpack = require('webpack')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/webstore/'
    : '/',
    configureWebpack: {
      plugins: [
          new webpack.DefinePlugin({
              'process.env': {
                  NODE_ENV: JSON.stringify(process.env.NODE_ENV)
              }
          })
      ]
  }
}
