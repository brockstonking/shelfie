import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Add from './components/add/add_product'
import Product from './components/dashboard/product/product';

export default (
    <Switch>
        <Route exact path='/' component={ Dashboard } />
        <Route path='/add' component={ Add } />
        <Route path='/edit/:id' component={ Add } />
    </Switch>
)