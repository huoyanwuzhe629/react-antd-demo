import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Dropdown, Icon, Row, Col} from 'antd';
import axios from 'axios';

const LOGIN_URL = '/login/queryLoginUser.do',
    LOGOUT_URL = 'http://bizwork.sogou-inc.com/logout';


class Header extends Component {
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
            ),
            menuMap = {
                advanced: '2',
                message: '4',
                authManage: '5',
            },
            path = 'advanced';
        return (
             <div className="header">
                <div className="header-wrapper">
                    <Row>
                        <Col xs={24} sm={24} md={4} lg={6}>
                            <div className="logo"></div>
                            <div className="title"><span>统一部署服务</span></div>
                        </Col>
                        <Col xs={0} sm={0} md={20} lg={18}>
                            <div className="login">
                                <Dropdown overlay={menu}>
                                    <a className="login-name" href="javascript:;">
                                    {userName}<Icon type="down" />
                                    </a>
                                </Dropdown>
                            </div>
                            <Menu theme="dark" mode="horizontal"
                            defaultSelectedKeys={[menuMap[path]]} style={{lineHeight: '64px'}}>
                                <Menu.Item key="2"><Link to="advanced" >高级功能</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="message" >消息提醒</Link></Menu.Item>
                                <Menu.Item key="5"><Link to="authManage" >权限管理</Link></Menu.Item>
                            </Menu>
                        </Col>
                    </Row>


                </div>
            </div>
        )
    }
}

export default Header
