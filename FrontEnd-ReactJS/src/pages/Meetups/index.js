import React from 'react';

import { Container, Content } from './styles';

export default function Meetups() {
    return (
        <Container>
            <Content>
                <aside>
                    <button type="submit">Create a new Meetup</button>
                </aside>
            </Content>
        </Container>
    );
}
