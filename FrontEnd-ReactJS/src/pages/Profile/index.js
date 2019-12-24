import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import * as AuthActions from '~/store/modules/auth/actions';
import * as UserActions from '~/store/modules/user/actions';
import { Container } from './styles';

export default function Profile() {
    const profile = useSelector(state => state.user.profile);
    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(AuthActions.signOut());
    }

    function handleUpdateProfile(data) {
        dispatch(UserActions.updateProfileRequest(data));
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleUpdateProfile}>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="E-mail" />

                <hr />

                <Input
                    name="oldPassword"
                    type="password"
                    placeholder="Old Password"
                />

                <Input
                    name="password"
                    type="password"
                    placeholder="New Password"
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                />
                <button type="submit">Atualizar o usuario</button>
            </Form>
            <button onClick={handleSignOut} type="submit">
                Sair do Meetapp
            </button>
        </Container>
    );
}
