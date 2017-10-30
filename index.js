//程序入口
//参考了阮一峰redux教程1,2,3
//http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
import React from 'react';
import { render } from 'react-dom';

import {  HashRouter  } from 'react-router-dom'

import { createHashHistory } from 'history'
import App from './src/App';

// import 'antd/dist/antd.min.css';
import './asset/style/app.less';

const history = createHashHistory();

render((
    <HashRouter>
        <App />
    </HashRouter>),
    document.getElementById('app')
);