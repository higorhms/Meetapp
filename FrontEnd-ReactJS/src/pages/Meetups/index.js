import React, { useEffect, useState } from 'react';
import { startOfDay, format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import DefaultImage from '~/assets/meetup.png';
import { Container, MeetupList, Meetup } from './styles';
import api from '~/services/api';

export default function Meetups() {
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        async function loadMeetups() {
            const today = startOfDay(new Date());
            const response = await api.get('/events', {
                params: { date: today },
            });

            const data = response.data.map(m => ({
                ...m,
                formattedDate: format(
                    parseISO(m.date),
                    "d 'de' MMMM 'de' yyyy",
                    {
                        locale: pt,
                    }
                ),
            }));
            setMeetups(data);
        }
        loadMeetups();
    }, []);

    function makeSubscription(id) {
        console.log(id);
    }

    return (
        <Container>
            <p>Meetups</p>
            <MeetupList>
                {meetups &&
                    meetups.map(meetup => (
                        <Meetup key={meetup.id}>
                            <img src={DefaultImage} alt="banner" />
                            <h1>{meetup.title}</h1>
                            <p>{meetup.location}</p>
                            <time>{meetup.formattedDate}</time>
                            <hr />
                            <p>Organizador: {meetup.user.name}</p>
                            <p>Contato: {meetup.user.email}</p>
                            <button
                                type="button"
                                onClick={() => makeSubscription(meetup.id)}
                            >
                                Subscription
                            </button>
                        </Meetup>
                    ))}
            </MeetupList>
        </Container>
    );
}
