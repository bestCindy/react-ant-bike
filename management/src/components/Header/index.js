import { Col } from 'antd';
import React, { Component } from 'react';
import { Row } from "antd";
import Utils from "../../utils/utils";
import axios from "../../axios";
import "./index.less";

class Header extends Component {
    componentWillMount() {
        this.setState({
            userName: "半亩方塘"
        });
        // setInterval(() => {
        //     let sysTime = Utils.formateDate(new Date().getTime());
        //     this.setState({
        //         sysTime
        //     });
        // }, 1000);

        this.getWeatherAPIData();
    }

    // encodeURIComponent 把中文做一些编码，转成字符的形式
    getWeatherAPIData() {
        let city = "上海";
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            if (res.status === "success") {
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }

    render() {
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt="" />
                        </span>
                        <span className="weather-detail">
                            { this.state.weather }
                        </span>
                    </Col>
                </Row>
            </div> 
        )
    }
}
 
export default Header;