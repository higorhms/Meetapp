import React, { useEffect, useState } from 'react';
import { startOfDay, format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useDispatch, useSelector } from 'react-redux';

import * as MeetupActions from '~/store/modules/meetup/actions';
import DefaultImage from '~/assets/meetup.png';
import { Container, MeetupList, Meetup } from './styles';
import api from '~/services/api';

export default function Meetups() {
    const dispatch = useDispatch();
    const [meetups, setMeetups] = useState([]);
    const subMeetups = useSelector(state => state.user.subMeetups);

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

            // Filtrando o array de meetups para mostrar apenas os meetups que o usuario ainda não se inscreveu
            let aux = [];
            data.forEach(m => {
                let deveAdd = true;
                subMeetups.forEach(s => {
                    if (m.id === s.meetup.id) {
                        deveAdd = false;
                    }
                });
                if (deveAdd) aux = [...aux, m];
            });

            setMeetups(aux);
        }
        loadMeetups();
    }, [subMeetups]);

    function makeSubscription(meetupId) {
        dispatch(MeetupActions.subscribeMeetupRequest(meetupId));
    }

    return (
        <Container>
            <p>Meetups</p>
            <MeetupList>
                {meetups.map(meetup => (
                    <Meetup key={meetup.id}>
                        <img
                            src={
                                (meetup.banner && meetup.banner.url) ||
                                DefaultImage
                            }
                            alt="banner"
                        />
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
