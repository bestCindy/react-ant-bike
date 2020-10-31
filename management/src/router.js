import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom"
import App from "./App";
import Admin from "./admin";
import Login from "./pages/login/login";
import Buttons from "./pages/ui/buttons";
import NoMatch from "./pages/nomatch";

class IRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
           <HashRouter>
               <App>
                   {/* 这三个是平级关系，只有访问 admin 的时候才有子路由的匹配 */}
                   <Route path="/login" component={ Login } />
                   <Route path="/admin" render={ ()=>
                        <Admin>
                            <Switch>
                                <Route exact path="/admin/ui/buttons" component={ Buttons } />
                                <Route component={ NoMatch } />
                            </Switch>
                        </Admin>
                    } />
                   <Route path="/order/detail" component={ Login } />
               </App>
           </HashRouter>
        );
    }
}
 
export default IRouter;