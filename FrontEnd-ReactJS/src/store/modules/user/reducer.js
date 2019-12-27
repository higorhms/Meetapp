import { produce } from 'immer';

const INITIAL_STATE = { profile: null, subMeetups: [] };

export default function user(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/SIGN_IN_SUCESS': {
                draft.profile = action.payload.user;
                break;
            }
            case '@auth/SIGN_OUT': {
                draft.profile = null;
                draft.subMeetups = [];
                break;
            }
            case '@user/UPDATE_PROFILE_SUCESS': {
                draft.profile = action.payload.profile;
                break;
            }
            case '@meetup/LOAD_SUBSCRIBED_MEETUPS_SUCESS': {
                draft.subMeetups = action.payload.subscribedMeetups;
                break;
            }
            case '@meetup/UNSUBSCRIBE_MEETUP_SUCESS': {
                draft.subMeetups = draft.subMeetups.filter(
                    m => m.meetup.id !== action.payload.meetupId
                );
                break;
            }
            default: {
                break;
            }
        }
    });
}
