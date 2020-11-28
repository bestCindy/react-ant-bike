import React, { Component } from 'react';
import { Card, message, Tabs, Icon } from "antd";
// import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import "./ui.less";

const TabPane = Tabs.TabPane;

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.newTabIndex = 0;
    }

    callBack = (key) => {
        message.info("Hi 您选择了页签： " + key);
    }

    componentWillMount() {
        const panes = [
            {
                title: "Tab 1",
                content: "Tab 1",
                key: "1"
            },
            {
                title: "Tab 1",
                content: "Tab 1",
                key: "2"
            },
            {
                title: "Tab 1",
                content: "Tab 1",
                key: "3"
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes//key value 一样
        })
    }

    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey)
    }

    add = () => {
        const { panes } = this.state;
        const activeKey = `Tab${this.newTabIndex++}`;
        const newPanes = [...panes];
        newPanes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({
          panes: newPanes,
          activeKey,
        });
    };
    
    remove = targetKey => {
        const { panes, activeKey } = this.state;
        let newActiveKey = activeKey;
        let lastIndex;
        panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const newPanes = panes.filter(pane => pane.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
          if (lastIndex >= 0) {
            newActiveKey = newPanes[lastIndex].key;
          } else {
            newActiveKey = newPanes[0].key;
          }
        }
        this.setState({
          panes: newPanes,
          activeKey: newActiveKey,
        });
    };

    render() { 
        return (
            <div className="card">
                <Card title="Tab 标签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callBack}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3" disabled>Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab 带图的标签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callBack}>
                        {/* <TabPane tab={<span><PlusCircleOutlined />Tab 2</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><EditOutlined />Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><DeleteOutlined />Tab 2</span>} key="3">Content of Tab Pane 3</TabPane> */}
                        <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">欢迎学习React课程</TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">欢迎学习React课程</TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">React是一个非常受欢迎的MV*框架</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab 带图的标签" className="card-wrap">
                    <Tabs 
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        defaultActiveKey="1" 
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panel) => {
                                return <TabPane  
                                    tab={panel.title}
                                    key={panel.key}
                                />
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}
 
export default Tab;