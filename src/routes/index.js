import React from 'react';
import { Switch } from 'react-router-dom';

import Route from '~/routes/Route';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import MeetupDetails from '~/pages/MeetupDetails';
import Meetups from '~/pages/Meetups';
import NewMeetup from '~/pages/NewMeetup';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/dashboard" isPrivate component={Dashboard} />
            <Route path="/profile" isPrivate component={Profile} />
            <Route path="/details/:id" isPrivate component={MeetupDetails} />
            <Route path="/meetups" isPrivate component={Meetups} />
            <Route path="/new" isPrivate component={NewMeetup} />
        </Switch>
    );
}
