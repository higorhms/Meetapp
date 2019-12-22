import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import Logo from '~/assets/logo.png';

import { Container } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required,
    email: Yup.string().email().required,
});

export default function SignIn() {
    function handleSubmit({ name, email }) {}

    return (
        <Container>
            <img src={Logo} alt="Meetapp" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" placeholder="Password" />
                <button type="submit">Acessar</button>
            </Form>

            <p>
                Do not have an account?
                <Link to="/register"> Sign Up</Link>
            </p>
        </Container>
    );
}
