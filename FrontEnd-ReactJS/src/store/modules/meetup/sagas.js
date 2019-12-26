import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

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

export default all([takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup)]);
