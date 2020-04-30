import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as MeetupActions from '~/store/modules/meetup/actions';
import DefaultImage from '~/assets/meetup.png';
import { Container, Meetup, MeetupList } from './styles';
import api from '~/services/api';

export default function Dashboard() {
    const dispatch = useDispatch();
    const [meetups, setMeetups] = useState([]);
    const meetupsSubscribeds = useSelector(state => state.user.subMeetups);

    useEffect(() => {
        async function loadMeetups() {
            const response = await api.get('/meetups');
            setMeetups(response.data);
        }
        loadMeetups();
    }, []);

    useEffect(() => {
        async function loadSubscribedMeetups() {
            await dispatch(MeetupActions.loadSubscribedMeetupsRequest());
        }
        loadSubscribedMeetups();
    }, [dispatch]);

    function makeUnsubscription(meetupId) {
        dispatch(MeetupActions.unsubscribeMeetupRequest(meetupId));
    }

    return (
        <Container>
            <p>Meetups que você organiza</p>
            <MeetupList>
                {meetups &&
                    meetups.map(meetup => (
                        <Meetup key={meetup.id}>
                            <img
                                src={
                                    (meetup.banner && meetup.banner.url) ||
                                    DefaultImage
                                }
                                alt="banner"
                            />
                            <h1>{meetup.title}</h1>
                            <Link to={`/details/${meetup.id}`}>Details</Link>
                        </Meetup>
                    ))}
            </MeetupList>

            <hr />

            <p>Meetups que você deseja participar</p>
            <MeetupList>
                {meetupsSubscribeds &&
                    meetupsSubscribeds.map(sub => (
                        <Meetup key={sub.meetup.id}>
                            <img
                                src={
                                    (sub.meetup.banner &&
                                        sub.meetup.banner.url) ||
                                    DefaultImage
                                }
                                alt="subscribedBanner"
                            />
                            <h1>{sub.meetup.title}</h1>
                            <p>{sub.meetup.location}</p>
                            <time>{sub.formattedDate}</time>
                            <button
                                type="button"
                                onClick={() =>
                                    makeUnsubscription(sub.meetup.id)
                                }
                            >
                                Unsubscribe
                            </button>
                        </Meetup>
                    ))}
            </MeetupList>
        </Container>
    );
}
