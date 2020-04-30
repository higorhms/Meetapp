import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Header from '~/components/Header';
// import Footer from '~/components/Footer';

export default function authLayout({ children }) {
    return (
        <>
            <Wrapper>
                <Header />
                {children}
                {/* <Footer /> */}
            </Wrapper>
        </>
    );
}

authLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
