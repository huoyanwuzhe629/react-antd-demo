var mockport =8080,
    Env = require('./env'),
    isFeEnv = Env.isFeEnv,
    httpServer = require('http-server'),
    fs = require('fs'),
    path = require('path'),
    mock = require('biz-mock');

if (isFeEnv) {
    let server = httpServer.createServer({
        root: path.join(process.cwd()),
        before: [
            function (req, res) {
                mock.dispatch(req, res);
            }
        ]
    });
    server.listen(mockport);
    if (!fs.existsSync(path.join(process.cwd(), 'mock'))) {
        mock.initFolder();
    }
    mock.start({ as: '.do' });
}

module.exports = {
	common:{
	},
	production:{},
	qa: {},
	dev: {},
	fe: {
		proxy: {
            '**/*.do': {
                target: 'http://localhost:' + mockport,
                bypass: function (req, res, proxyOptions) {
                    //处理jsp页面默认的action
                    if (req.headers.accept.indexOf('html') != -1) {
                        return 'app.html';
                    }
                }
            }
        },
        host: '0.0.0.0',
        port: 8081
	}
};
