import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import AuthManage from './content/AuthManage';
import Advanced from './content/Advanced';
import Message from './content/Message';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Main extends Component {
    render() {
        return (
            <Content className="content-wrap" style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content-wrap" style={{ background: '#fff', padding: 24}}>
                    <Route path="/" exact component={Advanced} />
                    <Route path="/authManage" component={AuthManage} />
                    <Route path="/advanced" component={Advanced} />
                    <Route path="/message" component={Message} />
                </div>
            </Content>
        )
    }
}
export default Main;