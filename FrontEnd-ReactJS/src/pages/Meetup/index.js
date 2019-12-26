import React, { useEffect, useState } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';

import * as MeetupActions from '~/store/modules/meetup/actions';
import { Container, Meetup } from './styles';
import api from '~/services/api';

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
            <Meetup>
                <Form initialData={meetup} onSubmit={handleUpdateMeetup}>
                    <Input name="title" />
                    <Input name="description" />
                    <Input name="location" />
                    <Input name="dateFormatted" />
                    <button type="submit">Atualizar</button>
                </Form>
                <button type="submit">Cancelar o Meetup</button>
            </Meetup>
        </Container>
    );
}
