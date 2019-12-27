import produce from 'immer';

const INITIAL_STATE = {
    subMeetups: [],
};

export default function meetup(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@meetup/LOAD_SUBSCRIBED_MEETUPS_SUCESS': {
                draft.subMeetups = action.payload.subscribedMeetups;
                break;
            }
            default: {
                break;
            }
        }
    });
}
