import React, {Component} from 'react';
import styles from './index.less';
import CSSModules from 'react-css-modules';

class WorkOrder extends Component {
    render() {
        return (
            <div>工单</div>
        );
    }
}

export default CSSModules(WorkOrder, styles);