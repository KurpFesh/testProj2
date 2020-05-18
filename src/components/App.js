import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import { OrderServices } from './OrderServices/OrderServices';
import { PageMock } from './PageMock/PageMock';

export default () => {
    return <div className="app">
        <Switch>
            <Route path='/' exact component={OrderServices}></Route>
            <Route path='/orderServices' exact component={OrderServices}></Route>
            <Route render={props => <PageMock url={props.location.pathname} />}></Route>
        </Switch>
    </div>
}