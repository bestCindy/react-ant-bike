import React, { Component } from 'react';
import { Menu } from "antd";
import MenuConfig from "./../../config/menuConfig";
import { NavLink } from "react-router-dom";
import "./index.less";
const { SubMenu } = Menu;

class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.rootSubmenuKeys = [];
        this.state = {}
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode,
            openKeys: [],
        });
    }

  
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    // 菜单渲染
    renderMenu = (data) => {
        return data.map(item => {
            this.rootSubmenuKeys.push(item.key);
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}> 
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
  
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Cindy MS</h1>
                </div>
                <Menu theme="dark" mode="inline" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange.bind(this)}>
                    { this.state.menuTreeNode }
                </Menu>
            </div>

        );
    }
}

export default NavLeft;