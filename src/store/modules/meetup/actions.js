export function createMeetupRequest(data) {
    return {
        type: '@meetup/CREATE_MEETUP_REQUEST',
        payload: { data },
    };
}

export function updateMeetupRequest(id, data) {
    return {
        type: '@meetup/UPDATE_MEETUP_REQUEST',
        payload: { id, data },
    };
}

export function subscribeMeetupRequest(meetupId) {
    return {
        type: '@meetup/SUBSCRIBE_MEETUP_REQUEST',
        payload: { meetupId },
    };
}

export function unsubscribeMeetupRequest(meetupId) {
    return {
        type: '@meetup/UNSUBSCRIBE_MEETUP_REQUEST',
        payload: { meetupId },
    };
}

export function unsubscribeMeetupSucess(meetupId) {
    return {
        type: '@meetup/UNSUBSCRIBE_MEETUP_SUCESS',
        payload: { meetupId },
    };
}

export function loadSubscribedMeetupsRequest() {
    return {
        type: '@meetup/LOAD_SUBSCRIBED_MEETUPS_REQUEST',
    };
}

export function loadSubscribedMeetupsSucess(subscribedMeetups) {
    return {
        type: '@meetup/LOAD_SUBSCRIBED_MEETUPS_SUCESS',
        payload: { subscribedMeetups },
    };
}

export function loadMeetupRequest(meetupId) {
    return {
        type: '@meetup/LOAD_MEETUP_REQUEST',
        payload: { meetupId },
    };
}

export function loadMeetupSucess(event) {
    return {
        type: '@meetup/LOAD_MEETUP_SUCESS',
        payload: { event },
    };
}
