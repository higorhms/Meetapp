import { produce } from 'immer';

const INITIAL_STATE = { event: {} };

export default function user(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@meetup/LOAD_MEETUP_SUCESS': {
                draft.event = action.payload.event;

                break;
            }
            default: {
                break;
            }
        }
    });
}
