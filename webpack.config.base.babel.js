// Import webpack
import webpack from 'webpack';

// Import Node packages
import path from 'path';

// Import webpack plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Import package.json
import PKG from './package';

export default {
  // The base directory for resolving `entry` (must be absolute path)
  context: path.resolve(__dirname, 'src'),

  entry: './index.js',

  output: {
    // The bundling output directory (must be absolute path)
    path: path.resolve(__dirname, 'dist'),

    // The output filename of the entry chunk, relative to `path`
    // [name] - Will be set per each key name in `entry`
    filename: '[name].js',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  module: {
    rules: [
      // Process JS(X) with Babel
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: false,
      hash: true,
      appMountId: 'app',
      title: PKG.name,
      meta: [
        {
          name: 'description',
          content: PKG.description,
        },
      ],
      mobile: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
};
