import React, {Component, PropTypes} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class FooterLayout extends Component {
    render() {
        const {} = this.props;
        return (
            <div className="layout-footer">
                <Footer style={{ textAlign: 'center' }}>
                ©2017 Created by XIONGSHENG
                </Footer>
            </div>
        )
    }
}

export default FooterLayout
