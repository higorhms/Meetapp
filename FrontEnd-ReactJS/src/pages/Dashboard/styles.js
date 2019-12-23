import styled from 'styled-components';

export const Container = styled.div`
    max-width: 900px;
    margin: 30px auto;

    > p {
        display: flex;
        align-items: center;
        height: 45px;
        border-radius: 4px;
        font-size: 26px;
        font-weight: bold;
        background: rgba(255, 255, 255, 1);
        margin: 5px 0;
        padding: 0 5px;
        color: #301199;
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

    > h1 {
        color: #301199;
        font-size: 20px;
    }
`;
