import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Profile, Content } from './styles';
import Logo from '~/assets/logo.png';

export default function Header() {
    const userName = useSelector(state => state.user.profile.name);
    const avatar = useSelector(
        state => state.user.profile.avatar && state.user.profile.avatar.url
    );

    return (
        <Container>
            <Content>
                <nav>
                    <img src={Logo} alt="Meetapp" />
                    <Link to="/dashboard">DASHBOARD</Link>
                    <Link to="/meetups">MEETUPS</Link>
                    <Link to="/new">NEW MEETUP</Link>
                </nav>

                <aside>
                    <Profile>
                        <strong>{userName}</strong>
                        <Link to="/profile">My Profile</Link>
                    </Profile>
                    <img
                        src={
                            avatar ||
                            'https://api.adorable.io/avatars/50/abott@adorable.png'
                        }
                        alt="Avatar"
                    />
                </aside>
            </Content>
        </Container>
    );
}
