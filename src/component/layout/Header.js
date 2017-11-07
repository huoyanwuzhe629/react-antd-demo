import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Dropdown, Icon, Avatar } from 'antd';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
import axios from 'axios';
import CSSModules from 'react-css-modules';
import styles from './layout.less';

const { Header, Content, Footer } = Layout;

const LOGIN_URL = '/login/queryLoginUser.do',
    LOGOUT_URL = 'http://bizwork.sogou-inc.com/logout';


class HeaderLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            collapsed: this.props.collapsed
        };
    }
    // componentDidMount() {
    //     axios(LOGIN_URL).then((response) => {
    //         const { data } = response.data;
    //         this.setState({
    //             userName: data[0].userName
    //         })
    //     })
    // }

    // logout = () => {
    //     window.location.href = LOGOUT_URL;
    // }
    toggle = () => {
        const {collapsed} = this.state;
        this.setState({
            collapsed: !collapsed
        })
        this.props.triggerCollapse(!collapsed);
    }

    render() {
        const currentUser = {
            notifyCount: 5,
            name: 'xiongsheng'
        };
        const menu = (
            <Menu className={styles['menu']} selectedKeys={[]} onClick={this.onMenuClick}>
              <Menu.Item disabled><Icon type="user" />个人中心</Menu.Item>
              <Menu.Item disabled><Icon type="setting" />设置</Menu.Item>
              <Menu.Divider />
              <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
            </Menu>
        );
        const {collapsed} = this.state;
        return (
            <Header className={styles['header']}>
                <Icon
                    className={styles['trigger']}
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <div className={styles['right']}>
                    <NoticeIcon
                        className={styles['action']}
                        count={currentUser.notifyCount}
                        onItemClick={(item, tabProps) => {
                            console.log(item, tabProps); // eslint-disable-line
                        }}
                        popupAlign={{ offset: [20, -16] }}
                    >
                        <NoticeIcon.Tab
                            title="通知"
                            emptyText="你已查看所有通知"
                            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
                        />
                        <NoticeIcon.Tab
                            title="消息"
                            emptyText="您已读完所有消息"
                            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
                        />
                        <NoticeIcon.Tab
                            title="待办"
                            emptyText="你已完成所有待办"
                            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
                        />
                    </NoticeIcon>
                    {currentUser.name ? (
                        <Dropdown overlay={menu}>
                            <span className={`${styles['action']} ${styles['account']}`}>
                                <Avatar size="small" className={styles['avatar']} src='/asset/img/user.jpg' />
                                {currentUser.name}
                            </span>
                        </Dropdown>
                    ) : <Spin size="small" style={{ marginLeft: 8 }} />}
                </div>
            </Header>
        )
    }
}

export default HeaderLayout
