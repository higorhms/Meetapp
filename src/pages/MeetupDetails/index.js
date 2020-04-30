import React, { useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import * as Yup from 'yup';

import * as MeetupActions from '~/store/modules/meetup/actions';
import { Container } from './styles';
import MeetupInput from './MeetupInput';

// const schema = Yup.object().shape({
//     title: Yup.string().required('The title cannot be empty'),
//     description: Yup.string().required('The description cannot be empty'),
//     location: Yup.string().required('The location cannot be empty'),
//     dateFormatted: Yup.date().required('The date cannot be empty'),
// });

export default function MeetupDetails({ match }) {
    const dispatch = useDispatch();
    const meetupId = match.params.id;
    const meetup = useSelector(state => state.meetup.event);

    useEffect(() => {
        dispatch(MeetupActions.loadMeetupRequest(meetupId));
    }, [dispatch, meetupId]);

    function handleUpdateMeetup(data) {
        dispatch(MeetupActions.updateMeetupRequest(meetup.id, data));
    }

    return (
        <Container>
            <Form
                // schema={schema}
                initialData={meetup}
                onSubmit={handleUpdateMeetup}
            >
                <MeetupInput name="banner_id" bannerId={meetup.banner_id} />
                <Input name="title" />
                <Input name="description" />
                <Input name="location" />
                <Input name="dateFormatted" />
                <button type="submit">Update</button>
            </Form>
            <button type="submit">Delete this Meetup</button>
        </Container>
    );
}

MeetupDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }).isRequired,
};
