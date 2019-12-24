import styled from 'styled-components';

export const Container = styled.div`
    max-width: 900px;
    margin: 30px auto;

    > p {
        height: 45px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: #fff;
        padding: 0 20px;

        display: flex;
        align-items: center;

        & + p {
            background: red;
        }
    }

    hr {
        margin: 30px 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
`;

export const MeetupList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;

    margin-top: 5px;
`;

export const Meetup = styled.li`
    border-radius: 4px;
    padding: 15px;

    background: rgba(255, 255, 255, 0.1);
    color: #fff;

    > h1 {
        color: #fff;
        font-size: 20px;
    }
`;
