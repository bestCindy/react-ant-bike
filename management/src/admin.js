import React, { Component } from 'react';
import { Col, Row } from "antd";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import NavLeft from "./components/NavLeft/index";
import Home from "./pages/home";
import "./style/common.less";

class Admin extends Component {
    state = {  }
    render() { 
        return (  
            <Row className="container">
                <Col span="3" className="nav-left">
                    <NavLeft />
                </Col>
                <Col span="21" className="main">
                    <Header></Header>
                    <Row className="content">
                        <Home />
                        {/* This is content */}
                    </Row>
                    <Footer />
                </Col>
            </Row>
        );
    }
}
 
export default Admin;