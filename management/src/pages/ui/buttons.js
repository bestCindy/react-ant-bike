import React, { Component } from 'react';
import { Card, Button, Radio } from "antd";
import { SearchOutlined, DownloadOutlined, EditOutlined, DeleteOutlined,
    PlusOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import "./ui.less";

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true
        }
    }

    handleClosingClick = () => {
        this.setState({
            loading: false
        })
    }

    handleChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    render() { 
        return (
            <div className="card">
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Cindy</Button>
                    <Button>Cindy</Button>
                    <Button type="dashed">Cindy</Button>
                    <Button type="danger">Cindy</Button>
                    <Button disabled>Cindy</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon={<PlusOutlined />}>编辑</Button>
                    <Button icon={<EditOutlined />}>创建</Button>
                    <Button type="dashed" icon={<DeleteOutlined />}>删除</Button>
                    <Button shape="circle" icon={<SearchOutlined />}></Button>
                    <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
                    <Button type="primary" icon={<DownloadOutlined />}>下载</Button>
                </Card>
                <Card title="Loading 按钮" className="card-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleClosingClick}>关闭</Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" icon={<LeftOutlined />}>返回</Button>
                        <Button type="primary" icon={<RightOutlined />}>前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Cindy</Button>
                    <Button size={this.state.size}>Cindy</Button>
                    <Button type="dashed" size={this.state.size}>Cindy</Button>
                    <Button type="danger" size={this.state.size}>Cindy</Button>
                </Card>
            </div>
        );
    }
}
 
export default Buttons;