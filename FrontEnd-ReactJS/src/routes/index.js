import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from '~/routes/Route';
import SignIn from '~/pages/SignIn';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignIn} />
            </Switch>
        </BrowserRouter>
    );
}
