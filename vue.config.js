module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  },
  pages: {
    index: {
      entry: "src/main.js",
      title: "project",
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
