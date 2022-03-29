module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  },
  pages: {
    index: {
      entry: "src/main.js",
      title: "Yu's Portfolio",
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "./src/assets/sass/global.scss";',
      },
    },
  },
}
