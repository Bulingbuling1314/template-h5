'use strict'
const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");
const path = require('path');
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  publicPath: '/', // 编译文件路径
  outputDir: 'dist', // 编译文件夹
  assetsDir: 'static', // 编译完成静态资源文件
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径
  devServer: {
    open: false,
    port: 8011,
    host: '0.0.0.0',
    // proxy: {}
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    config.module // 配置vant按需引入
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem-exclude')({
            remUnit: 37.5,
            exclude: /node_modules/
          })
        ]
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('src/assets/style/color.less')
      ]
    }
  }
}
