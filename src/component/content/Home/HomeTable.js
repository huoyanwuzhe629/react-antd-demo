import React, { Component } from 'react';
import styles from './index.less';
import CSSModules from 'react-css-modules';
import { getColumns } from './column';
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Table } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;

class HomeTable extends Component {
    render() {
        const columns = getColumns();
        const dataSource = [
            {
                systemName: 'test',
                branchName: 'test',
                functionDesc: 'test',
                startTime: 'test',
                testTime: 'test',
                publishTime: 'test',
                creator: 'test',
                option: 'test'
            }, {
                systemName: 'test1',
                branchName: 'test1',
                functionDesc: 'test1',
                startTime: 'test1',
                testTime: 'test1',
                publishTime: 'test1',
                creator: 'test1',
                option: 'test1'
            }
        ];
        return (
            <div className={`${styles.content} ${styles['home-container']}`}>
                <Card bordered={false} style={{ flex: 'auto' }}>
                    <div className={styles.tableList}>
                        <div className={styles.tableListForm}>
                            <Form layout="inline">
                                <Row gutter={48}>
                                    <Col md={8} sm={24}>
                                        <FormItem label="选择项目">
                                            <Select placeholder="请选择" style={{ width: '100%' }}>
                                                <Option value="0">旭日</Option>
                                                <Option value="1">信息流</Option>
                                            </Select>
                                        </FormItem>
                                    </Col>
                                    <Col md={8} sm={24}>
                                        <FormItem label="选择人员">
                                            <Select placeholder="请选择" style={{ width: '100%' }}>
                                                <Option value="0">熊大</Option>
                                                <Option value="1">赵二</Option>
                                            </Select>
                                        </FormItem>
                                    </Col>
                                    <Col md={8} sm={24}>
                                        <span className={styles.submitButtons}>
                                            <Button type="primary" htmlType="submit">查询</Button>
                                        </span>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className={styles.tableListOperator}>
                            <Button icon="plus" type="primary" >新建系统</Button>
                        </div>
                        <Table rowKey="systemName" dataSource={dataSource} columns={columns} />
                    </div>
                </Card>
            </div>
        );
    }
}

export default CSSModules(HomeTable, styles);