import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Dropdown, Icon, Row, Col} from 'antd';
import axios from 'axios';

const { Header, Content, Footer } = Layout;

const LOGIN_URL = '/login/queryLoginUser.do',
    LOGOUT_URL = 'http://bizwork.sogou-inc.com/logout';


class HeaderLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        };
    }
    componentDidMount() {
        axios(LOGIN_URL).then((response)=>{
            const {data} = response.data;
            this.setState({
                userName: data[0].userName
            })
        })
    }

    logout = ()=>{
        window.location.href = LOGOUT_URL;
    }

    render() {
        const {login, pathname} = this.props,
            {userName} = this.state,
            menu =(
              <Menu>
                <Menu.Item>
                  <a  href="javascript:;" onClick={this.logout}>退出</a>
                </Menu.Item>
              </Menu>
            );

        return (
            <div className="header">
                <Header>
                    <Row>
                        <div className="logo" />
                        <div className="title"><span>考拉平台</span></div>
                        <div className="login">
                            <Dropdown overlay={menu} >
                                <a className="login-name" href="javascript:;">
                                {userName}<Icon type="down" />
                                </a>
                            </Dropdown>
                        </div>
                        <Col xs={0} sm={0} md={14} lg={18}>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '64px' }}
                            >
                                <Menu.Item key="1"><Link to="advanced" >高级功能</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="message" >消息提醒</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="authManage" >权限管理</Link></Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </Header>
            </div>
        )
    }
}

export default HeaderLayout
