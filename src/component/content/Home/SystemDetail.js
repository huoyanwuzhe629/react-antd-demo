import React, {Component} from 'react';
import styles from './index.less';
import CSSModules from 'react-css-modules';
import { Card } from 'antd';

class SystemDetail extends Component {
    render() {
        return (
            <div className={`${styles.content} ${styles['home-container']}`}>
                <Card title="版本" style={{ marginBottom: 24 }} bordered={false}>
                    <span>系统详情</span>
                    <a href="#index/systemDetail/11/workOrder/22">工单</a>
                </Card>
                
            </div>
        );
    }
}

export default CSSModules(SystemDetail, styles);