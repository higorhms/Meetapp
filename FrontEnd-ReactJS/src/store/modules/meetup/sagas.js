import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
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

        console.log(formattedDate);

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

export default all([
    takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
    takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
]);
