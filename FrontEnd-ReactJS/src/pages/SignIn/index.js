import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import Logo from '~/assets/logo.png';

import { Container } from './styles';

export default function SignIn() {
    return (
        <Container>
            <img src={Logo} alt="Meetapp" />
            <Form>
                <Input name="name" placeholder="Nome completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="E-mail completo"
                />
                <button type="submit">Acessar</button>
            </Form>
        </Container>
    );
}
