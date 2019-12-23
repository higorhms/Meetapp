import { put, all, takeLatest } from 'redux-saga/effects';

import * as AuthActions from './actions';

import history from '~/services/history';

export function* signIn({ payload }) {
    console.log('TO aqui pelo menos');

    yield put(AuthActions.signInSucess());

    history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
