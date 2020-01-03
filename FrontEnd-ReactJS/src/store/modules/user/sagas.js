import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as UserActions from './actions';
import api from '~/services/api';

export function* updateProfile({ payload }) {
    try {
        const { name, email, avatar_id, ...rest } = payload.data;

        // eslint-disable-next-line prefer-object-spread
        const profile = Object.assign(
            {
                name,
                email,
                avatar_id,
            },
            rest.oldPassword ? rest : {}
        );

        const response = yield call(api.put, 'users', profile);

        toast.success('User updated with sucess');
        yield put(UserActions.updateProfileSucess(response.data));
    } catch (error) {
        toast.error('Something is wrong, please check your data and try again');
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
