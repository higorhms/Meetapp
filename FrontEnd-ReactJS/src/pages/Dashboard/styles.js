import styled from 'styled-components';

export const Container = styled.div`
    max-width: 900px;
    margin: 30px auto;

    > h1 {
        text-align: center;
    }
`;

export const MeetupList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin: 30px auto;
`;

export const Meetup = styled.li`
    background: #eee;
    border-radius: 4px;
    padding: 15px;
`;
