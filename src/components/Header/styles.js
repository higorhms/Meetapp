import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background: #fff;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 30px;
    max-width: 1200px;
    margin: 0 auto;

    nav {
        display: flex;
        align-items: center;

        img {
            padding-right: 25px;
            border-right: 1px solid #953249;
        }

        a {
            padding-left: 25px;
            font-weight: bold;

            :hover {
                color: ${darken(0.1, '#953249')};
            }
        }
    }

    aside {
        display: flex;

        img {
            margin-left: 25px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 25px;
    border-right: 1px solid #953249;
    justify-content: center;

    a {
        :hover {
            color: ${darken(0.1, '#953249')};
        }
    }
`;
