/*
* @Author: xiongsheng
* @Date:   2016-12-09 14:19:44
* @Last Modified by:   xiongsheng
* @Last Modified time: 2017-02-10 17:28:44
*/

import React, { Component } from 'react';
import styles from './index.less';
import CSSModules from 'react-css-modules';
import { Route, Link } from 'react-router-dom';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import DescriptionList from 'ant-design-pro/lib/DescriptionList';
import { Button, Dropdown } from 'antd';
import HomeTable from './HomeTable';
import SystemDetail from './SystemDetail';
import WorkOrder from './WorkOrder';

const { Description } = DescriptionList;
const ButtonGroup = Button.Group;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            systemId: '',
            workOrderId: ''
        }
    }

    componentDidMount() {
        const { pathname } = this.props.location;
        this.setNavState(pathname);
    }
    componentWillReceiveProps(nextProps) {
        const { pathname } = nextProps.location;
        if (pathname !== this.props.location.pathname) {
            this.setNavState(pathname);
        }
    }

    setNavState = (pathname) => {
        const pathList = pathname.split('/');
        this.setState({
            systemId: pathList[3],
            workOrderId: pathList[5]
        });
    }

    getHeaderMsg = () => {
        let breadcrumbList, title, action, description;
        const {
            systemId,
            workOrderId
        } = this.state;

        if (workOrderId && systemId) {
            title = '工单页';
            breadcrumbList = [{
                title: '主页',
                href: '/index',
            }, {
                title: '系统页',
                href: `/index/systemDetail/${systemId}`,
            }, {
                title: '工单页',
            }];
            action = (
                <div>
                    <ButtonGroup>
                        <Button>操作</Button>
                        <Button>操作</Button>
                    </ButtonGroup>
                    <Button type="primary">主操作</Button>
                </div>
            );
            description = (
                <DescriptionList size="small" col="3" className={styles['header-msg']}>
                    <Description term="开始时间">2017-11-07</Description>
                    <Description term="提测时间">2017-11-08</Description>
                    <Description term="发布时间">2017-11-09</Description>
                    <Description term="项目进度">测试中</Description>
                    <Description term="项目参与者">赵二 熊三</Description>
                </DescriptionList>
            );
        } else if (systemId) {
            title = '系统页';
            breadcrumbList = [{
                title: '主页',
                href: '/index',
            }, {
                title: '系统页',
            }];
            action = (
                <div>
                    <ButtonGroup>
                        <Button>操作</Button>
                        <Button>操作</Button>
                    </ButtonGroup>
                    <Button type="primary">增加项目成员</Button>
                </div>
            );
            description = (
                <DescriptionList size="small" col="3" className={styles['header-msg']}>
                    <Description term="项目负责人">赵永</Description>
                    <Description term="项目成员">赵永、林振兴</Description>
                    <Description term="项目简介">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Description>
                    <Description term="月上线次数">7次</Description>
                    <Description term="月新增代码">10000</Description>
                    <Description term="bug率">0%</Description>
                </DescriptionList>
            );
        } else {
            title = '主页';
            breadcrumbList = [{
                title: '主页',
            }];
            action = '';
            description = '';
        }
        return {
            title,
            breadcrumbList,
            action,
            description
        }
    }

    getPageHeader = () => {
        const {
            title,
            breadcrumbList,
            action,
            description
        } = this.getHeaderMsg();

        return (<PageHeader
            title={title}
            action={action}
            content={description}
            breadcrumbList={breadcrumbList}
            linkElement={Link}
        />);
    }
    render() {
        const { match } = this.props;
        return (
            <div className={styles['home-wrap']}>
                {this.getPageHeader()}
                <Route path={`${match.path}`} exact
                    component={HomeTable}
                />
                <Route exact path={`${match.path}/systemDetail/:systemId`} component={SystemDetail} />
                <Route path={`${match.path}/systemDetail/:systemId/workOrder/:workOrderId`} component={WorkOrder} />
            </div>
        );
    }
}

export default CSSModules(Home, styles);
