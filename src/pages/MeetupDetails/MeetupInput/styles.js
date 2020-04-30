import styled from 'styled-components';

export const Container = styled.div`
    align-self: center;
    margin-bottom: 30px;

    label {
        cursor: pointer;

        img {
            height: 200px;
            border-radius: 5px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            background: #eee;
        }

        input {
            display: none;
        }
    }
`;
