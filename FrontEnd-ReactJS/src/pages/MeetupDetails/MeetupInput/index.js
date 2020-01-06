import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import DefaultImage from '~/assets/meetup.png';
import { Container } from './styles';

export default function MeetupInput({ banner_id }) {
    const [file, setFile] = useState('');

    return (
        <Container>
            <label htmlFor="banner">
                <img src={file || DefaultImage} alt="banner" />

                <input type="file" accept="image/*" id="banner" />
            </label>
        </Container>
    );
}
