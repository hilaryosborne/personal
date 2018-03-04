const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].[hash].css',
  disable: process.env.NODE_ENV === 'development'
})

const cleanup = new WebpackCleanupPlugin({
  exclude: ['manifest.json', 'fonts/**/*', 'images']
})

const assets = new AssetsPlugin({
  filename: 'manifest.json',
  path: path.resolve(`./public/`),
  fullPath: false
})

const env = new webpack.DefinePlugin({
  'process.env': {}
})

const options = new webpack.LoaderOptionsPlugin({
  options: {}
})

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve('public'),
    filename: 'js/app.[chunkhash].js',
    publicPath: `/`
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      images: path.resolve('src/images/'),
      config: path.resolve('src/config/'),
      components: path.resolve('src/components/'),
      containers: path.resolve('src/containers/'),
      reducers: path.resolve('src/reducers/'),
      scripts: path.resolve('src/scripts/')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {sourceMap: true}
            }
          ],
          fallback: 'style-loader'})
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot|otf)(\?.*$|$)/,
        exclude: [/images/, /src\/images/],
        loader: 'url-loader?limit=1024&name=fonts/[path][name].[ext]'
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, extractSass, cleanup, assets, env, options ]
}
