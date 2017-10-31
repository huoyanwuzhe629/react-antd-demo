'use strict';
const Env = require('./env');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let env = Env.env;
let resolve = Env.resolve;
let unFePlugins = [
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: 'vendor.js',
		chunks: ['app', 'vendor']
	}),
    new HtmlWebpackPlugin({
        template: resolve('./appBuild.html'),
        filename: 'index.html',
        inject: true,
        chunks: ['app', 'vendor']
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings:false
        },
        sourceMap: false
    })
];

module.exports = {
    common: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /^\.\/zh\-cn$/),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: false
        })
    ],
    production: unFePlugins.concat([
        //注入发布环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
	]),
    qa: unFePlugins,
    dev: unFePlugins,
	fe: [
		new webpack.DllReferencePlugin({
			context: process.cwd(),
			manifest: require('./manifest.json')
		}),
	]
};