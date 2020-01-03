import React from 'react';

import DefaultImage from '~/assets/meetup.png';
import { Container } from './styles';

export default function MeetupInput() {
    return (
        <Container>
            <label htmlFor="banner">
                <img src={DefaultImage} alt="banner" />

                <input type="file" id="banner" />
            </label>
        </Container>
    );
}
