import React, {Component, PropTypes} from 'react'
import { Layout, Icon } from 'antd';
const {Footer } = Layout;

class FooterLayout extends Component {
    render() {
        const {} = this.props;
        return (
            <Footer style={{ textAlign: 'center' }}>
                <Icon type="copyright" /><span style={{fontSize: '14px'}}> 2017 Created by bizdev-cpcfe</span>
            </Footer>
        )
    }
}

export default FooterLayout
