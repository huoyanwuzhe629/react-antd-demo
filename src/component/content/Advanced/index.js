/*
* @Author: xiongsheng
* @Date:   2016-12-09 14:19:44
* @Last Modified by:   xiongsheng
* @Last Modified time: 2017-02-10 17:28:44
*/

import React, {Component} from 'react';
import styles from './index.less';
import CSSModules from 'react-css-modules';

class Advanced extends Component {
    render() {
        return (
            <span styleName='testSpan'>高级功能</span>
        );
    }
}

export default CSSModules(Advanced, styles);
