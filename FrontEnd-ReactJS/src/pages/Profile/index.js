import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

export default function Profile() {
    return (
        <Container>
            <Form>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="E-mail" />

                <Input
                    name="oldPassword"
                    type="password"
                    placeholder="Old Password"
                />

                <hr />

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
            <button type="submit">Sair do Meetapp</button>
        </Container>
    );
}
