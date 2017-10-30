import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import AuthManage from './content/AuthManage';
import Advanced from './content/Advanced';
import Message from './content/Message';

class Main extends Component {
    render() {
        return (
            <div className="content-wrap">
                <Route path="/" exact component={Advanced} />
                <Route path="/authManage" component={AuthManage} />
                <Route path="/advanced" component={Advanced} />
                <Route path="/message" component={Message} />
            </div>)
    }
}
export default Main;