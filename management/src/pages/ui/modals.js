import React, { Component } from 'react';
import { Card, Button, Radio, Modal } from "antd";
import "./ui.less";

class Modals extends Component {
    state = { 
        showModal1: false
    }

    handleOpen = (type) => {
        this.setState({
            [type]: true
        })
    }

    handleConfirm = (type) => {
        Modal[type]({
            title: "确认？",
            content: "你确定你学会了 react 了吗?",
            onOk() {
                console.log("OK")
            },
            onCancel() {
                console.log("Cancel")
            }
        })
    }

    render() { 
        return ( 
            <div className="card">
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen("showModal1")}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen("showModal2")}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen("showModal3")}>顶部 20px 弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen("showModal4")}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm("confirm")}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm("info")}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm("success")}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm("warning")}>Warning</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>小王同学欢迎你！</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="取消"
                    onCancel={()=>{
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>小王同学欢迎你！</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal3}
                    style={{top: 20}}
                    onCancel={()=>{
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>小王同学欢迎你！</p>
                </Modal>
                <Modal
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={()=>{
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>小王同学欢迎你！</p>
                </Modal>
            </div>
        );
    }
}
 
export default Modals;