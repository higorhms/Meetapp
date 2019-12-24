import React, { useEffect, useState } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Meetup, MeetupList } from './styles';
import api from '~/services/api';
// import history from '~/services/history';

export default function Dashboard() {
    const [meetups, setMeetups] = useState([]);
    const [meetupsSubscribeds, setMeetupsSubscribeds] = useState([]);

    useEffect(() => {
        async function loadMeetups() {
            const response = await api.get('/meetups');

            const data = response.data.map(m => ({
                ...m,
                formattedDate: format(parseISO(m.date), "d 'de' MMMM", {
                    locale: pt,
                }),
            }));

            setMeetups(data);
        }

        async function loadSubscribedMeetups() {
            const respons = await api.get('/registrations');

            const subscribedMeetups = respons.data.map(s => ({
                ...s,
                formattedDate: format(parseISO(s.meetup.date), "d 'de' MMMM", {
                    locale: pt,
                }),
            }));
            setMeetupsSubscribeds(subscribedMeetups);
        }

        loadMeetups();
        loadSubscribedMeetups();
    }, [meetups]);

    return (
        <Container>
            <p>Meetups que você organiza</p>
            <MeetupList>
                {meetups.map(meetup => (
                    <Meetup
                        key={meetup.id}
                        // onClick={() => history.push('/profile')}
                    >
                        <h1>{meetup.title}</h1>
                        <p>{meetup.location}</p>
                        <time>{meetup.formattedDate}</time>
                    </Meetup>
                ))}
            </MeetupList>

            <hr />

            <p>Meetups que você deseja participar</p>
            <MeetupList>
                {meetupsSubscribeds.map(sub => (
                    <Meetup key={sub.meetup.id}>
                        <h1>{sub.meetup.title}</h1>
                        <p> {sub.meetup.location}</p>
                        <time>{sub.formattedDate}</time>
                    </Meetup>
                ))}
            </MeetupList>
        </Container>
    );
}
