import React, { useEffect, useState } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import * as Yup from 'yup';

import * as MeetupActions from '~/store/modules/meetup/actions';
import { Container } from './styles';
import api from '~/services/api';
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
    const [meetup, setMeetup] = useState({});

    useEffect(() => {
        async function loadMeetup() {
            const response = await api.get(`/meetups/${meetupId}`);

            const data = Object.assign(response.data, {
                dateFormatted: format(
                    parseISO(response.data.date),
                    'yyyy-MM-dd',
                    {
                        locale: pt,
                    }
                ),
            });

            setMeetup(data);
        }
        loadMeetup();
    }, [meetupId]);

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
                <MeetupInput name="banner_id" />
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
