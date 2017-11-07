import React, {Component} from 'react';
import { Layout, Menu} from 'antd';
import Sider from './component/layout/Sider';
import Header from './component/layout/Header';
import Main from './component/Main';
import Footer from './component/layout/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    //子组件触发伸缩事件
    triggerCollapse = (collapsed) => {
        this.setState({
            collapsed
        })
    }
    render() {
        const {collapsed} = this.state;
        //app由layout（布局）和content（内容）组成，
        //layout中有头部导航栏和底部栏组成，不受路由变化影响
        //content中的内容由路由控制显示内容，比如访问根路由'/'，则会加载Home组件
        return (
            <Layout className="ant-layout-has-sider">
                <Sider collapsed = {collapsed} triggerCollapse={this.triggerCollapse}/>
                <Layout>
                    <Header collapsed = {collapsed} triggerCollapse={this.triggerCollapse}/>
                    <Main />
                    <Footer />
                </Layout>
            </Layout>
        );
    }
}

export default App

