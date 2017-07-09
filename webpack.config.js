const webpack = require('webpack');
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
    entry: "./static/calendarModule.js",
    output: {
        path: __dirname,
      filename: "./static/bundle.js"
    },
    module : {
      loaders: [
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader?jQuery!expose-loader?$'
      }
      ],
    },
		plugins: [
      new BabiliPlugin()
		]
};
