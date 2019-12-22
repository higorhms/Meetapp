import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from '~/routes/Route';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/register" component={SignUp} />
                <Route path="/dashboard" isPrivate component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}
