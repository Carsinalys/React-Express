const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 3001,
    hot: false,
    open: true,
    compress: true,
    historyApiFallback: {
      index: "index.html" // this option is redirecting all requests to index.html for workibg reloading
    },
    stats: {
      colors: true
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  cache: true,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
