import {createGlobalStyle}  from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* --------------------------------------- IMPORTING FONTS -------------------------------------- */
    /* Minimalist and Modern Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    /* Elegant and Serif Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap');

    /* Playful and Creative Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    /* Monospace Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;700&display=swap');

    /* --------------------------------------- GLOBAL SETTINGS -------------------------------------- */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({theme})=> theme.fonts.min1};
        font-weight: 200;
        font-size: 16px;
    }

    html, body, #root {
        min-height: 100vh;
        width: 100%;
        background-image: ${({ theme }) => theme.bg};
        background-size: 150% 150%;
        animation: bg 10s ease infinite;
        margin: 0;
        padding: 0;
    }


    @keyframes bg {
        0%{background-position: 0% 50%}
        50%{background-position: 100% 50%}
        100%{background-position:0% 50%}
    }
`;