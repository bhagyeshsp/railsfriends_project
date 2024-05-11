const { environment } = require('@rails/webpacker')

// To add Babel loader explicitly, although it's typically configured by default with Webpacker
const babelLoader = environment.loaders.get('babel')
babelLoader.test = /\.js$|\.jsx$/
babelLoader.exclude = /node_modules/
babelLoader.use = [{
  loader: 'babel-loader',
  options: {
    presets: [
      '@babel/preset-env'
    ]
  }
}]

module.exports = environment

module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
