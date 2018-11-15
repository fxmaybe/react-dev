import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import App from './App';
import Layout from './components/layout';

import Test from './pages/test';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

export default class BaseRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/" render={() =>
                            <Layout>   
                                <Switch>
                                    <Route path="/" exact render={() =>
                                        <Redirect to="/home" />
                                    } />
                                    <Route path="/home" component={Home} />
                                    <Route path="/test" component={Test} />
                                    <Redirect to="/home" />
                                </Switch>
                            </Layout>
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}