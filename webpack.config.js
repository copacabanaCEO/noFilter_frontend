const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack')
const Dotenv = require('dotenv-webpack');


module.exports = {
   entry: './src/main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
   devServer: {
      //inline: true,
      historyApiFallback: true,
      port: 3000
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react', '@babel/preset-env', "@babel/preset-typescript"]
            }
         },
         { test: /\.txt$/, use: 'raw-loader' },
         {
            test: /\.css$/i,
            use: [
               'style-loader',
                'css-loader',
               "postcss-loader",],
        },
        {
         test: /\.(jpg|jpeg|gif|png)$/,
         use: {
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             publicPath: 'images',
             outputPath: 'images',
           }
         }
       },
       
      ]
   },
   plugins:[
      // new HtmlWebpackPlugin({
      //    template: './public/index.html'
      // }),
      new webpack.ProvidePlugin({
         process: 'process/browser',
       }),
   //    new HtmlWebpackPlugin ({
   //       favicon: "./public/favicon.ico",
   //       filename: "index.html",
   //       manifest: "./public/manifest.json"
   //   }),
      // new webpack.EnvironmentPlugin([
      //    'REACT_APP_BASE_URL'
      // ]),
   //    new webpack.DefinePlugin({
   //       'process.env.REACT_APP_BASE_URL': JSON.stringify('development')
   //    })
   new Dotenv()
   ]
}
