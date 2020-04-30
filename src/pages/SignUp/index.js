import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import * as AuthActions from '~/store/modules/auth/actions';
import Logo from '~/assets/logo.png';
import { Container } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('Please type your name.'),
    email: Yup.string()
        .email()
        .required('Please type a valid e-mail.'),
    password: Yup.string()
        .min(6)
        .required('Please type a password with 6 characteres or more'),
});

export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, password }) {
        dispatch(AuthActions.signUpRequest(name, email, password));
    }

    return (
        <Container>
            <img src={Logo} alt="Meetapp" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Name" />
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
