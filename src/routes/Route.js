import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import authLayout from '~/pages/_layouts/auth';
import defaultLayout from '~/pages/_layouts/default';
import { store } from '~/store';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    // const { signed } = false;
    const { signed } = store.getState().auth;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />;
    }

    const Layout = isPrivate ? authLayout : defaultLayout;

    return (
        <Route
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}
