export function updateMeetupRequest(id, data) {
    return {
        type: '@meetup/UPDATE_MEETUP_REQUEST',
        payload: { id, data },
    };
}
