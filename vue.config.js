const path = require("path");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/debuggervue/showcase/" : "/",
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "debuggervue/api": path.resolve(__dirname, "src/components/api/Api.js"),
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
