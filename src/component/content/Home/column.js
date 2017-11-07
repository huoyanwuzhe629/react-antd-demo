import React from 'react';
export function systemNameColumn () {
    return {
		title: "系统名",
        dataIndex: "systemName",
        render: (text, record) => (<a href="#index/systemDetail/11">{text}</a>)
    }
}

export function branchNameColumn () {
    return {
		title: "分支名",
		dataIndex: "branchName",
		
    }
}

export function functionDescColumn () {
    return {
		title: "功能描述",
		dataIndex: "functionDesc",
		
    }
}

export function startTimeColumn () {
    return {
		title: "开始时间",
		dataIndex: "startTime",
		
    }
}

export function testTimeColumn () {
    return {
		title: "提测时间",
		dataIndex: "testTime",
		
    }
}

export function publishTimeColumn () {
    return {
		title: "发布时间",
		dataIndex: "publishTime",
		
    }
}

export function creatorColumn () {
    return {
		title: "创建人",
		dataIndex: "creator",
		
    }
}

export function optionColumn () {
    return {
		title: "操作",
		dataIndex: "option",
		
    }
}

export function getColumns () {
    const columns = [
        systemNameColumn(),
        branchNameColumn(),
        functionDescColumn(),
        startTimeColumn(),
        testTimeColumn(),
        publishTimeColumn(),
        creatorColumn(),
        optionColumn()
    ]
    return columns;
}
