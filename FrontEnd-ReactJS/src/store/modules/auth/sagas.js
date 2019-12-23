import { put, all, takeLatest, call } from 'redux-saga/effects';

import * as AuthActions from './actions';

import history from '~/services/history';
import api from '~/services/api';

export function* signIn({ payload }) {
    const { email, password } = payload;
    console.tron.log(payload);

    const response = yield call(api.post, 'sessions', { email, password });

    const { user, token } = response.data;

    api.defaults.headers.Authorization = `Barear ${token}`;

    yield put(AuthActions.signInSucess(user, token));
    history.push('/dashboard');
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
]);
