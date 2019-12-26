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
