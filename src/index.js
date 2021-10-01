import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import Cars from './cars'
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import './Login.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/Login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/' component={Cars}/> 
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);