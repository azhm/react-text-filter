"use strict";


process.env.NODE_ENV = 'production';


const webpack = require('webpack');
const path = require('path');


module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: `${require('./package.json').name}.js`,
    path: path.resolve('build'),
    library: 'TextFilter',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include: [path.resolve('src')]}
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true},
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }
};
