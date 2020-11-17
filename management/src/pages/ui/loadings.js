import React, { Component } from 'react';
import { Card, Spin, Alert } from "antd"
import { LoadingOutlined } from '@ant-design/icons';
import "./ui.less";

class Loadings extends Component {
    state = {  }
    render() {
        return ( 
            <div className="card">
                <Card title="Spin 的用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin style={{margin: "0 10px"}} />
                    <Spin size="large" />
                    <Spin indicator={<LoadingOutlined />} style={{marginLeft: 10}} />
                </Card>
                <Card className="card">
                    <Alert
                        message="React"
                        description="欢迎来到小王同学的半亩方塘"
                        type="info" 
                    />
                    <Spin tip="Loading……" indicator={<LoadingOutlined />}>
                        <Alert
                            message="React"
                            description="欢迎来到小王同学的半亩方塘"
                            type="info" 
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}
 
export default Loadings;