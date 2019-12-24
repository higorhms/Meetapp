import { put, all, takeLatest, call } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import * as AuthActions from './actions';

import history from '~/services/history';
import api from '~/services/api';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;
        console.tron.log(payload);

        const response = yield call(api.post, 'sessions', { email, password });

        const { user, token } = response.data;

        api.defaults.headers.Authorization = `Barear ${token}`;

        yield put(AuthActions.signInSucess(user, token));
        history.push('/dashboard');
    } catch (error) {
        toast.error('Something is wrong, please check your data and try again');
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;

        yield call(api.post, '/users', {
            name,
            email,
            password,
        });

        history.push('/');
        toast.success('Account created');
    } catch (error) {
        toast.error('Something is wrong, please check your data and try again');
    }
}

export function signOut() {
    history.push('/');
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    api.defaults.headers.Authorization = `Barear ${token}`;
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_OUT', signOut),
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
