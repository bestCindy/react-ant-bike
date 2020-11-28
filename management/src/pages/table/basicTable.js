import React, { Component } from 'react';
import { Card, Table, Radio, message } from "antd";

class BasicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        const dataSource = [
            {
                id: 0,
                userName: "Jack",
                sex: "1",
                state: "1",
                interest: "1",
                birthday: "2000-01-01",
                address: "1aaaaaaaaa",
                time: "09:00"
            },
            {
                id: 1,
                userName: "Jack",
                sex: "1",
                state: "1",
                interest: "1",
                birthday: "2000-01-01",
                address: "1aaaaaaaaa",
                time: "09:00"
            },
            {
                id: 2,
                userName: "Jack",
                sex: "1",
                state: "1",
                interest: "1",
                birthday: "2000-01-01",
                address: "1aaaaaaaaa",
                time: "09:00"
            },
        ]
        this.setState({
            dataSource
        })
    }

    render() {
        const columns = [
            {
                title: "id",
                dataIndex: "id"
            },
            {
                title: "用户名",
                dataIndex: "userName"
            },
            {
                title: "状态",
                dataIndex: "state"
            },
            {
                title: "爱好",
                dataIndex: "interest"
            },
            {
                title: "生日",
                dataIndex: "birthday"
            },
            {
                title: "地址",
                dataIndex: "address"
            },
            {
                title: "早起时间",
                dataIndex: "time"
            },
            {
                title: "性别",
                dataIndex: "sex"
            },
        ];
        return (
            <div style={{width: "100%"}}>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false} //不分页
                    />
                </Card>
                
            </div>
        );
    }
}
 
export default BasicTable;