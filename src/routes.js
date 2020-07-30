import React from 'react';
import {BrowserRouter, Switch, Route}from 'react-router-dom';
import main from './pages/main';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={main}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;