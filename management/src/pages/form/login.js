import React, { Component } from 'react';
import { Card, Form, Input, Button } from "antd";
import "./form.less";
const FormItem = Form.Item

class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    formRef = React.createRef();
    render() {
        return (
            <div className="card">
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{marginTop: 10}}>
                    <Form ref={this.formRef} layout="horizontal" style={{width: 300}}>
                        <FormItem name="userName" rules={[{ required: true }]}>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem name="userPwd" rules={[{ required: true }]}>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
 
export default FormLogin;