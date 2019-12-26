import React, { useEffect, useState } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';

import DefaultImage from '~/assets/meetup.png';
import { Container, Meetup, MeetupList } from './styles';
import api from '~/services/api';

export default function Dashboard() {
    const [meetups, setMeetups] = useState([]);
    const [meetupsSubscribeds, setMeetupsSubscribeds] = useState([]);

    useEffect(() => {
        async function loadMeetups() {
            console.log('isso aqui ta executando quantas vezes?');

            const response = await api.get('/meetups');
            setMeetups(response.data);
        }
        loadMeetups();
    }, []);

    useEffect(() => {
        async function loadSubscribedMeetups() {
            console.log('isso aqui ta executando quantas vezes?');
            const respons = await api.get('/registrations');

            const subscribedMeetups = respons.data.map(s => ({
                ...s,
                formattedDate: format(parseISO(s.meetup.date), "d 'de' MMMM", {
                    locale: pt,
                }),
            }));
            console.log(subscribedMeetups);
            setMeetupsSubscribeds(subscribedMeetups);
        }

        loadSubscribedMeetups();
    }, []);

    return (
        <Container>
            <p>Meetups que você organiza</p>
            <MeetupList>
                {meetups &&
                    meetups.map(meetup => (
                        <Meetup key={meetup.id}>
                            <img src={DefaultImage} alt="banner" />
                            <h1>{meetup.title}</h1>
                            <Link to={`/details/${meetup.id}`}>Details</Link>
                        </Meetup>
                    ))}
            </MeetupList>

            <hr />

            <p>Meetups que você deseja participar</p>
            <MeetupList>
                {meetupsSubscribeds.map(sub => (
                    <Meetup key={sub.meetup.id}>
                        <img src={DefaultImage} alt="subscribedBanner" />
                        <h1>{sub.meetup.title}</h1>
                        <p>{sub.meetup.location}</p>
                        <time>{sub.formattedDate}</time>
                    </Meetup>
                ))}
            </MeetupList>
        </Container>
    );
}
