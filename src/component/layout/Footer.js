import React, {Component, PropTypes} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class FooterLayout extends Component {
    render() {
        const {} = this.props;
        return (
            <Footer className="layout-footer" style={{ textAlign: 'center' }}>
            ©2017 Created by XIONGSHENG
            </Footer>
        )
    }
}

export default FooterLayout
