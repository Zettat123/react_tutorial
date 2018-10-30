const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const port = 3000

const app = express()
const config = require('./webpack.config.js')

config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.devtool = 'inline-source-map'
config.mode = 'development'
config.output.publicPath = '/'

const compiler = webpack(config)

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
)

app.use(webpackHotMiddleware(compiler))

app.listen(port, error => {
  if (error) {
    console.error(error)
  } else {
    console.info(`App is listening on port ${port} ...`)
  }
})
