import { produce } from 'immer';

const INITIAL_STATE = { signed: false, token: null };

export default function auth(state = INITIAL_STATE, action) {
    console.log(action);
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/SIGN_IN_SUCESS': {
                draft.signed = true;
                console.log(draft.signed);
                break;
            }
            default: {
                break;
            }
        }
    });
}
