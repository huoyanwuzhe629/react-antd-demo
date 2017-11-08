import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthManage from './content/AuthManage';
import Home from './content/Home';
import Message from './content/Message';
import { Layout} from 'antd';
const {Content} = Layout;

class Main extends Component {
    render() {
        return (
            <Content style={{display:'flex'}}>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/authManage" component={AuthManage} />
                  <Route path="/index" component={Home} />
                  <Route path="/message" component={Message} />
                </Switch>
            </Content>
        )
    }
}
export default Main;