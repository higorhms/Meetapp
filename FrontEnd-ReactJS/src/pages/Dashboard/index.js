import React from 'react';

import { Container, Meetup, MeetupList } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <h1>Meetups que você organiza</h1>
            <MeetupList>
                <Meetup>
                    <h1>Meetup React</h1>
                    <p>Local: Estacio</p>
                    <time>Data: 10/04/1996</time>
                </Meetup>
                <Meetup>
                    <h1>Meetup React</h1>
                    <p>Local: Estacio</p>
                    <time>Data: 10/04/1996</time>
                </Meetup>
                <Meetup>
                    <h1>Meetup React</h1>
                    <p>Local: Estacio</p>
                    <time>Data: 10/04/1996</time>
                </Meetup>
                <Meetup>
                    <h1>Meetup React</h1>
                    <p>Local: Estacio</p>
                    <time>Data: 10/04/1996</time>
                </Meetup>
            </MeetupList>

            <h1>Meetups que você deseja participar</h1>
            <MeetupList>
                <Meetup>
                    <h1>Meetup React</h1>
                    <p>Local: Estacio</p>
                    <time>Data: 10/04/1996</time>
                </Meetup>
                <Meetup>
                    <h1>Meetup React</h1>
                    <p>Local: Estacio</p>
                    <time>Data: 10/04/1996</time>
                </Meetup>
                <Meetup>
                    <h1>Meetup React</h1>
                    <p>Local: Estacio</p>
                    <time>Data: 10/04/1996</time>
                </Meetup>
                <Meetup>
                    <h1>Meetup React</h1>
                    <p>Estacio</p>
                    <time>Data: 10/04/1996</time>
                </Meetup>
            </MeetupList>
        </Container>
    );
}
