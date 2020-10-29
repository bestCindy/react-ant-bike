import React, { Component } from 'react';
import { Menu } from "antd";
import "./index.less"
import MenuConfig from "./../../config/menuConfig"

const { SubMenu } = Menu;

class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        });
    }

    // 菜单渲染
    renderMenu = (data) => {
        return data.map(item => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}> 
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
        return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Cindy MS</h1>
                </div>
                <Menu theme="dark" mode="vertical">
                    { this.state.menuTreeNode }
                </Menu>
            </div>

        );
    }
}

export default NavLeft;