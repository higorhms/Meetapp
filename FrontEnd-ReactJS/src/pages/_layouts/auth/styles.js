import styled from 'styled-components';
import { primaryColor, secondaryColor } from '~/styles/global';

export const Wrapper = styled.div`
    min-height: 100%;
    background: linear-gradient(-360deg, ${primaryColor}, ${secondaryColor});
    padding-bottom: 10px;
`;
