const path = require("path");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/debuggervue/showcase/" : "/",
  productionSourceMap: true,
  configureWebpack: {
    resolve: {
      alias: {
        "debuggervue/api": path.resolve(__dirname, "src/components/api/Api.js"),
        "debuggervue/dtButton": path.resolve(
          __dirname,
          "src/components/dtButton/dtButton.vue"
        ),
      },
    },
    output: {
      libraryExport: "default",
    },
  },
  css: {
    extract: false,
  },
};
