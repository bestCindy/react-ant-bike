import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom"
import App from "./App";
import Admin from "./admin";
import Login from "./pages/login/login";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import NoMatch from "./pages/nomatch";
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Message from './pages/ui/message';
import Tab from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousel';
import FormLogin from './pages/form/login';
import basicTable from './pages/table/basicTable'
import City from './pages/city/city.js'

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
                                <Route exact path="/admin/ui/modals" component={ Modals } />
                                <Route exact path="/admin/ui/loadings" component={ Loadings } />
                                <Route exact path="/admin/ui/notice" component={ Notice } />
                                <Route exact path="/admin/ui/message" component={ Message } />
                                <Route exact path="/admin/ui/tabs" component={ Tab } />
                                <Route exact path="/admin/ui/gallery" component={ Gallery } />
                                <Route exact path="/admin/ui/carousel" component={ Carousels } />
                                <Route exact path="/admin/form/login" component={ FormLogin } />
                                <Route exact path="/admin/table/basic" component={ basicTable } />
                                <Route exact path="/admin/city" component={ City } />
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