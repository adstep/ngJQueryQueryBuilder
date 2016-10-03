const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    path:"./dist",
    filename: "ngJQueryQueryBuilder.js"
  },
  externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    alias: {
      // "dotjs": __dirname  + "/node_modules/doT/doT.js",
      // "jQuery-QueryBuilder": __dirname  + "/node_modules/jQuery-QueryBuilder/dist/js/query-builder.js",
      // 'jquery.extendext': './node_modules/jquery-extendext/jquery.extendext.js'
    }
  },
  // devtool: 'source-map',
  module: {
    loaders: [
      // {
      //     test: require.resolve("angular-lock"),
      //     loader: "imports?Auth0Lock=>require('auth0-lock').default"
      // },

      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     doT: "doT"
  //   })
  // ],
  ts: {
    configFileName: 'tsconfig.json'
  }
}