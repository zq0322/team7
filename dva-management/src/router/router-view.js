import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'dva/router';

class RouterView extends Component {
    render() {
        const { Routes } = this.props;
        const DefaultRoute = <Route key={1} exact path='/' component={() =>
            <Redirect to='login' />
        }></Route>
        return <Switch>
            {
                Routes.length && Routes.map((item, index) => {
                    const Children = item.children === undefined ? [] : item.children;
                    if (item.component) {
                        return <Route key={index} path={item.path} render={(api) => {
                            return <item.component routes={Children} {...api}></item.component>
                        }}></Route>
                    }
                }).concat([DefaultRoute])
            }
        </Switch>
    }
}

export default RouterView;