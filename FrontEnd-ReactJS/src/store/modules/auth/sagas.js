import { put, all, takeLatest, call } from 'redux-saga/effects';

import * as AuthActions from './actions';

import history from '~/services/history';
import api from '~/services/api';

export function* signIn({ payload }) {
    const { email, password } = payload;
    console.tron.log(payload);

    const response = yield call(api.post, 'sessions', { email, password });

    const { user, token } = response.data;

    yield put(AuthActions.signInSucess(user, token));
    history.push('/dashboard');
}

export function signOut() {
    history.push('/');
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
