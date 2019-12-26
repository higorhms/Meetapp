import styled from 'styled-components';

export const Container = styled.div`
    max-width: 900px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;

        input {
            height: 45px;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: #fff;
            margin: 5px 0;
            padding: 0 20px;

            &::placeholder {
                color: #eee;
            }
        }

        button {
            background: #301199;
            border: none;
            border-radius: 4px;
            color: #fff;
            margin: 5px 0;
            padding: 0 20px;
            height: 37px;
        }
    }
`;
