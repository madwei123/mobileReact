const CracoLessPlugin = require('craco-less')
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components')
    },
    resolve: {
      fallback: {
        util: require.resolve('util/')
      }
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
export {}
