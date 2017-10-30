const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Env = require('./env');
const publicPath = require('./publicPath');
const resolve = Env.resolve;

let common = {
    rules: [
        {
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ["css-loader", {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: (loader) => [
                            require('autoprefixer')(),
                        ]
                    }
                }, "less-loader"]
            })
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: ['file-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]']
        }, {
            test: /\.(js|jsx)$/i,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }
    ]
};

module.exports = {
    common: common,
    production: {},
    qa: {},
    dev: {},
    fe: {}
};
