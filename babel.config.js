module.exports = function(api) {
  var validEnv = ['development', 'test', 'production']
  var currentEnv = api.env()
  var isDevelopmentEnv = api.env('development')
  var isProductionEnv = api.env('production')
  var isTestEnv = api.env('test')

  return {
    presets: [
      (isTestEnv || isDevelopmentEnv || isProductionEnv) && [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: 3
        }
      ]
    ].filter(Boolean),
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-destructuring',
      [
        '@babel/plugin-transform-class-properties',
        {
          loose: true
        }
      ],
      '@babel/plugin-transform-object-rest-spread',
      '@babel/plugin-transform-private-property-in-object',
      [
        '@babel/plugin-transform-runtime',
        {
          helpers: false,
          regenerator: true
        }
      ]
    ].filter(Boolean)
  }
}
