import { produce } from 'immer';

const INITIAL_STATE = { user: null };

export default function user(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/SIGN_IN_SUCESS': {
                draft.user = action.payload.user;
                break;
            }

            default: {
                break;
            }
        }
    });
}
