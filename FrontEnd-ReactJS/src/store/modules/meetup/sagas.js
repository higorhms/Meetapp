import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import * as MeetupActions from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* createMeetup({ payload }) {
    try {
        const { title, description, location, date } = payload.data;

        yield call(api.post, '/meetups', {
            title,
            description,
            location,
            date,
        });

        history.push('/dashboard');
        toast.success('Meetup created with sucess');
    } catch (error) {
        toast.error('Someting is wrong, please try again');
    }
}

export function* updateMeetup({ payload }) {
    try {
        const { id } = payload;
        const { title, description, location, formattedDate } = payload.data;

        yield call(api.put, `/meetups/${id}`, {
            title,
            description,
            location,
            date: formattedDate,
        });

        toast.success('Meetup updated with sucess');
    } catch (error) {
        toast.error('Someting is wrong, please try again');
    }
}

export function* subscribeMeetup({ payload }) {
    try {
        const { meetupId } = payload;

        yield call(api.post, '/subscriptions', {
            meetup_id: meetupId,
        });

        history.push('/dashboard');
        toast.success('Have a good Meetup !');
    } catch (error) {
        toast.error(`${error}`);
    }
}

export function* loadSubscribedMeetups() {
    try {
        const response = yield call(api.get, '/registrations');
        // const respons = await api.get('/registrations');

        const subscribedMeetups = response.data.map(s => ({
            ...s,
            formattedDate: format(
                parseISO(s.meetup.date),
                "d 'de' MMMM 'de' yyyy",
                {
                    locale: pt,
                }
            ),
        }));
        yield put(MeetupActions.loadSubscribedMeetupsSucess(subscribedMeetups));
    } catch (error) {
        toast.error('Someting is wrong, please try again');
    }
}

export function* unsubscribeMeetup({ payload }) {
    try {
        const { meetupId } = payload;

        yield call(api.delete, `/subscriptions/${meetupId}`);

        toast.success('Unsubscribed with sucess');
        yield put(MeetupActions.unsubscribeMeetupSucess(meetupId));
    } catch (err) {
        toast.error('Someting is wrong, please try again');
    }
}

export default all([
    takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
    takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
    takeLatest('@meetup/SUBSCRIBE_MEETUP_REQUEST', subscribeMeetup),
    takeLatest(
        '@meetup/LOAD_SUBSCRIBED_MEETUPS_REQUEST',
        loadSubscribedMeetups
    ),
    takeLatest('@meetup/UNSUBSCRIBE_MEETUP_REQUEST', unsubscribeMeetup),
]);
