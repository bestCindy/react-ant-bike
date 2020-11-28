import React, { Component } from 'react';
import { Card, Carousel } from "antd";
import "./ui.less";

class Carousels extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
   
    render() {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };
        return (
            <div>
                <Card title="图片背景轮播" className="card-wrap">
                    <Carousel>
                        <div>
                            <h3 style={contentStyle}>banana</h3>
                        </div>
                        <div>
                            <h3>apple</h3>
                        </div>
                        <div>
                            <h3>pear</h3>
                        </div>
                        <div>
                            <h3>grape</h3>
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}

export default Carousels;