import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import Logo from '~/assets/logo.png';

import { Container } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required,
    email: Yup.string().email().required,
    password: Yup.string().min(6).required,
});

export default function SignUp() {
    return (
        <Container>
            <img src={Logo} alt="Meetapp" />

            <Form schema={schema}>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Password" />
                <button type="submit">Create account</button>
            </Form>

            <p>
                Already have an account?
                <Link to="/"> Sign in</Link>
            </p>
        </Container>
    );
}
