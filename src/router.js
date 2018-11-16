import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import App from './App';
import AuthRoute from './components/auth';
import Layout from './components/layout';
import Page404 from './pages/page404';

import Test from './pages/test';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

import Boss from './pages/user/boss';
import Genius from './pages/user/genius';

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
                                    <Route path="/home" render={() =>
                                        <div>
                                            <AuthRoute></AuthRoute>
                                            <Route path="/home" component={Home} />
                                        </div> 
                                    } />
                                    <Route path="/test" render={() =>
                                        <div>
                                            <AuthRoute></AuthRoute>
                                            <Route path="/test" component={Test} />
                                        </div>
                                    } />
                                    <Route path="/u" render={() =>
                                        <Switch>
                                            <Route path="/u" exact render={() =>
                                                <Redirect to="/page404" component={Page404} />
                                            } />
                                            <Route path="/u/boss" render={() =>
                                                <div>
                                                    <AuthRoute></AuthRoute>
                                                    <Route path="/u/boss" component={Boss} />
                                                </div>
                                            } />
                                            <Route path="/u/genius" render={() =>
                                                <div>
                                                    <AuthRoute></AuthRoute>
                                                    <Route path="/u/genius" component={Genius} />
                                                </div>
                                            } />
                                            <Redirect to="/page404" component={Page404} />
                                        </Switch>
                                    } />
                                    <Route to="/page404" component={Page404} />
                                </Switch>
                            </Layout>
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}