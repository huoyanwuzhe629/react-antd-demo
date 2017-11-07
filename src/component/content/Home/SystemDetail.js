import React, {Component} from 'react';
import styles from './index.less';
import CSSModules from 'react-css-modules';

class SystemDetail extends Component {
    render() {
        return (
            <div>
                <span>系统详情</span>
                <a href="#index/systemDetail/11/workOrder/22">工单</a>
            </div>
        );
    }
}

export default CSSModules(SystemDetail, styles);