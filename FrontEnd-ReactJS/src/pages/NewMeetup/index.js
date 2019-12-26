import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import * as MeetupActions from '~/store/modules/meetup/actions';
import { Container } from './styles';

const schema = Yup.object().shape({
    title: Yup.string().required('The title cannot be empty'),
    description: Yup.string().required('The description cannot be empty'),
    location: Yup.string().required('The location cannot be empty'),
    date: Yup.date().required('The date cannot be empty'),
});

export default function NewMeetup() {
    const dispatch = useDispatch();

    function handleCreate(data) {
        dispatch(MeetupActions.createMeetupRequest(data));
    }

    return (
        <Container>
            <Form schema={schema} onSubmit={handleCreate}>
                <Input name="title" placeholder="Title" />
                <Input name="description" placeholder="Description" />
                <Input name="location" placeholder="Location" />
                <Input name="date" type="date" placeholder="Date" />
                <button type="submit">Create a Meetup</button>
            </Form>
        </Container>
    );
}
