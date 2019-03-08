import React,{Component} from 'react';
import RouterView from './router-view'
import RouterRoutes from './router-routes'
import {BrowserRouter as Router} from 'dva/router'

class Root extends Component {
    render() {
        return <Router>
            <RouterView Routes={RouterRoutes}></RouterView>
        </Router>
    }
}

function RouterConfig() {
    return <Root></Root>
}

export default RouterConfig;