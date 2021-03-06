import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const primaryColor = '#953249';
export const secondaryColor = '#301199';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap');

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

*:focus{
    outline: 0;
}

html, body, #root {
    height: 100%;
    font-family: 'Roboto Mono', monospace;
}

body{
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font-size: 14px;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}

button{
    cursor: pointer;
}

`;
