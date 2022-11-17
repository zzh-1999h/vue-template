const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('views', '@/views')
  },
  configureWebpack: {
    plugins: [
      require('unplugin-element-plus/webpack')({
        // options
      })
    ]
  }
})
