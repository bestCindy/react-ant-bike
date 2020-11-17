import React, { Component } from 'react';
import { Card, Spin, Alert, Button, notification } from "antd";
import "./ui.less";

class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    openNotification = (type, direction) => {
        if (direction) {
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message: "发工资了",
            description: "上个月考勤 22 天，迟到 12 天，实发工资 100000"
        });
    }

    render() { 
        return (
            <div className="card">
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification("success")}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification("info")}>Info</Button>
                    <Button type="primary" onClick={() => this.openNotification("warning")}>Warning</Button>
                    <Button type="primary" onClick={() => this.openNotification("error")}>Error</Button>
                </Card>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification("success", "topLeft")}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification("info", "topRight")}>Info</Button>
                    <Button type="primary" onClick={() => this.openNotification("warning", "bottomLeft")}>Warning</Button>
                    <Button type="primary" onClick={() => this.openNotification("error", "bottomRight")}>Error</Button>
                </Card>
            </div>
        );
    }
}
 
export default Notice;