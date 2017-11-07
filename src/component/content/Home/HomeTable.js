import React, {Component} from 'react';
import styles from './index.less';
import CSSModules from 'react-css-modules';
import {getColumns} from './column';
import {Table, Button, Select} from 'antd';
const Option = Select.Option;

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
            <div>
                <div className={styles['option-wrap']}>
                    <div>
                        <Select className={styles['option-select']} defaultValue="0">
                            <Option value="0">请选择系统</Option>
                            <Option value="1">Lucy</Option>
                        </Select>
                        <Select className={styles['option-select']} defaultValue="0">
                            <Option value="0">请选择人员</Option>
                            <Option value="1">Lucy</Option>
                            <Option value="2">yiminghe</Option>
                        </Select>
                        <Button>查询</Button>
                    </div>
                    <div>
                        <Button className={styles['option-button']}>创建系统</Button>
                    </div>
                </div>
                <Table rowKey="systemName" dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}

export default CSSModules(HomeTable, styles);