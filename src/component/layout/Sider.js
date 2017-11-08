import React, { Component, PropTypes } from 'react'
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './layout.less';
const { Header, Content, Footer,Sider } = Layout;

class SiderLayout extends Component {
    constructor(props){
        super(props);
		this.state = {
            collapsed: this.props.collapsed
        };
    }
    
    onCollapse = () => {
        const {collapsed} = this.state;
        this.setState({
            collapsed: !collapsed
        })
        this.props.triggerCollapse(!collapsed);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.collapsed !== this.props.collapsed) {
            this.setState({
                collapsed: nextProps.collapsed
            })
        }
    }

    handleOpenChange = () => {
        console.log('onOpen');
    }

    render() {
        const {collapsed} = this.state;
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                collapsedWidth={80}
                breakpoint="md"
                onCollapse={this.onCollapse}
                width={256}
                className={styles['sider']}
            >
                <div className={styles['logo']}>
                    <Link to="/">
                        <img src="/asset/img/koala-logo.png" alt="logo" />
                        <h1>考拉</h1>
                    </Link>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    onOpenChange={this.handleOpenChange}
                    style={{ margin: '16px 0', width: '100%' }}
                    inlineIndent={24}
                >
                    <Menu.Item key="1"><Link to="/index" ><Icon type='table'/><span>主页</span></Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/message" ><Icon type='profile'/><span>消息提醒</span></Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/authManage" ><Icon type='user'/><span>权限控制</span></Link></Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default SiderLayout