const webpack = require('webpack');
const BabiliPlugin = require("babili-webpack-plugin");
const path = require('path');

module.exports = {
    entry: ["bootstrap-loader", "./static/app.js"],
    output: {
        path: __dirname,
      filename: "./static/bundle.js"
    },
    resolve: {
      modules: [
        path.resolve('./css'),
        path.resolve('./node_modules'),
      ],
    },
    module : {
      loaders: [
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader?jQuery!expose-loader?$'
      },
      {
        test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports-loader?jQuery=jquery'
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      ],
    },
		plugins: [
      new BabiliPlugin()
		]
};
