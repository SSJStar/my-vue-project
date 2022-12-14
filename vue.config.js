const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //添加以下代码
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.50.18:9091', //接口域名
        changeOrigin: true,             //是否跨域
        ws: true,                       //是否代理 websockets
        secure: true,                   //是否https接口
        pathRewrite: {                  //路径重置
          '^/api': ''
        }
      }
    }
  },

//  配置webpack
  configureWebpack: {
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
      ]
    }
  }

})
