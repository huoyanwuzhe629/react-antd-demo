import React, {Component} from 'react';
import styles from './index.less';
import CSSModules from 'react-css-modules';
import { Card } from 'antd';

class WorkOrder extends Component {
    render() {
        return (
            <div className={`${styles.content} ${styles['home-container']}`}>
                <Card title="日志记录" style={{ marginBottom: 24 }} bordered={false}>
                    XXXXXXXXXXXXXXXXXXXXXXXXXXX
                </Card>
                <Card title="所需接口" style={{ marginBottom: 24 }} bordered={false}>
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                </Card>
                <Card title="Bug列表" style={{ marginBottom: 24 }} bordered={false}>
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                </Card>
            </div>
        );
    }
}

export default CSSModules(WorkOrder, styles);