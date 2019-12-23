import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import * as AuthActions from '~/store/modules/auth/actions';
import Logo from '~/assets/logo.png';

import { Container } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('Insita um e-mail válido'),
    password: Yup.string().required('Insita uma senha válida'),
});

export default function SignIn() {
    const dispatch = useDispatch();

    function handleSubmit({ email, password }) {
        dispatch(AuthActions.signInRequest(email, password));
    }

    return (
        <Container>
            <img src={Logo} alt="Meetapp" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Password" />
                <button type="submit">Acessar</button>
            </Form>

            <p>
                Do not have an account?
                <Link to="/register"> Sign Up</Link>
            </p>
        </Container>
    );
}
