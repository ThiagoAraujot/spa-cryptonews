import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
}

html {
    width: auto;
}

body {
    max-width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
}
`;
