/*
* @Author: xiongsheng
* @Date:   2016-12-09 14:19:44
* @Last Modified by:   xiongsheng
* @Last Modified time: 2017-02-10 17:28:44
*/

import React, {Component} from 'react';
import styles from './index.less';
import CSSModules from 'react-css-modules';
import { Route } from 'react-router-dom';
import HomeTable from './HomeTable';
import SystemDetail from './SystemDetail';
import WorkOrder from './WorkOrder';

class Home extends Component {
    render() {
        const {match} = this.props;
        console.log(this.props);
        return (
            <div className="content-wrap">
                <div className="content-wrap content-container" >
                    <Route path={`${match.path}`} exact 
                        component={HomeTable}
                    />
                    <Route exact path={`${match.path}/systemDetail/:systemId`} component={SystemDetail} />
                    <Route path={`${match.path}/systemDetail/:systemId/workOrder/:workOrderId`} component={WorkOrder} />
                </div>
            </div>
        );
    }
}

export default CSSModules(Home, styles);
