import React, { useState, useEffect } from 'react';

import DefaultImage from '~/assets/meetup.png';
import { Container } from './styles';
import api from '~/services/api';

export default function MeetupInput({ bannerId }) {
    const [file, setFile] = useState({});

    useEffect(() => {
        async function loadPreview() {
            console.log('executado x vezes');
            const response = await api.get(`/files/${bannerId}`);

            setFile(response.data.url);
        }
        loadPreview();
    }, [bannerId]);

    return (
        <Container>
            <label htmlFor="banner">
                <img src={file || DefaultImage} alt="banner" />

                <input type="file" accept="image/*" id="banner" />
            </label>
        </Container>
    );
}
