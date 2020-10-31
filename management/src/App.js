import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                {/* 用来存放子组件 */}
                { this.props.children }
            </div>
        );
    }
}
 
export default App;