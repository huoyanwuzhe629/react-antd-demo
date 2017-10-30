const webpack = require('webpack');
const path = require('path');
const vendors = require('./env/vendors');
//配置需要加入vendor中的包

module.exports = {
	devtool: '',
	entry: {
		vendor: vendors
	},
	output: {
		path: path.join(process.cwd(), 'dist'),
		filename: '[name].js',
		library: '[name]'
	},
	plugins: [
		new webpack.ProvidePlugin({

        }),
		new webpack.DllPlugin({
			path: path.join(process.cwd(), 'env/manifest.json'),
			name: '[name]',
			context: __dirname
		})

	]
};