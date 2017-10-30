let webpack = require('webpack');
let path = require('path');

let Env = require('./env');
let Module = require('./module');
let Plugins = require('./plugins');
let Resolve = require('./resolve');
let DevServer = require('./devServer');
let vendors = require('./vendors');
let publicPath = require('./publicPath');
let env = Env.env;
let resolve = Env.resolve;
let smartEnv = Env.smartEnv;

let fileName = '[name].js';

const devTool = env('source-map', '');

let Entry = {
	app: resolve('./index.js')
};

if(!Env.isFeEnv){
	Entry.vendor = vendors;
}


let config = {
    entry: Entry,
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: fileName,
        publicPath: publicPath + '/',
        chunkFilename: fileName,
        crossOriginLoading: 'anonymous'
    },
    resolve: smartEnv(Resolve),
    module: smartEnv(Module),
    plugins: smartEnv(Plugins),
    devServer: smartEnv(DevServer),
    devtool: devTool
}


module.exports = config;