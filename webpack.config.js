const webpack = require('webpack');
const path = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpritePlugin = require('svg-sprite-loader/plugin');
const autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const jsSourcePath = path.join(__dirname, './source/js');
const buildPath = path.join(__dirname, './build');
// const imgPath = path.join(__dirname, './source/assets/img');
// const iconPath = path.join(__dirname, './source/assets/icons');
const sourcePath = path.join(__dirname, './source');


// Common plugins
const plugins = [
  new SpritePlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].js',
    minChunks(module) {
      const context = module.context;
      return context && context.indexOf('node_modules') >= 0;
    },
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  }),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html',
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            'last 3 version',
            'ie >= 10',
          ],
        }),
      ],
      context: sourcePath,
    },
  }),
  new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
  })
];

// Common rules
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    use: ExtractTextPlugin.extract({
      use: ['css-loader', 'less-loader']
    }),
    test: /\.less$/
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      fallback: "style-loader", use: "css-loader"
    })
  },
  {
    test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
    use: 'file-loader?name=[name].[ext]?[hash]'
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
  }
];

if (isProduction) {
  // Production plugins
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new ExtractTextPlugin('style-[hash].css')
  );

  // Production rules
  rules.push(
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!postcss-loader!sass-loader',
      }),
    }
  );
} else {
  // Development plugins
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  );

  // Development rules
  rules.push(
    // {
    //   test: /\.scss$/,
    //   exclude: /node_modules/,
    //   use: [
    //     'style-loader',
    //     // Using source maps breaks urls in the CSS loader
    //     // https://github.com/webpack/css-loader/issues/232
    //     // This comment solves it, but breaks testing from a local network
    //     // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
    //     // 'css-loader?sourceMap',
    //     'css-loader',
    //     'postcss-loader',
    //     'sass-loader?sourceMap',
    //   ],
    // }
  );
}

module.exports = {
  devtool: isProduction ? false : 'source-map',
  context: jsSourcePath,
  entry: {
    js: './index.js',
  },
  output: {
    path: buildPath,
    publicPath: "http://localhost:3000/",
    filename: 'app-[hash].js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      jsSourcePath,
    ],
    alias: {
      '../../theme.config$': path.join(__dirname, 'my-semantic-theme/theme.config')
    }
  },
  plugins,
  devServer: {
    contentBase: isProduction ? buildPath : sourcePath,
    historyApiFallback: true,
    port: 3000,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '0.0.0.0',
    disableHostCheck: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
};
