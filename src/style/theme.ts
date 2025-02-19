const fonts =  {
    min1: 'Poppins, sans-serif',                    /*Bests to mimalist styles - use with font 200 - 16px*/
    min2: 'Roboto, sans-serif',                     /*Bests to mimalist styles - use with font 200 - 16px*/
    min3: 'Lato, sans-serif',
    min4: 'Montserrat, sans-serif',        
    min5: 'Open Sans, sans-serif',
    min6: 'Inter, sans-serif',
    ele1: 'Playfair Display, serif',
    ele2: 'Merriweather, serif',
    ele3: 'Libre Baskerville, serif',
    ele4: 'Cormorant Garamond, serif',
    ele5: 'EB Garamond, serif',
    pla1: 'Pacifico, cursive',
    pla2: 'Amatic SC, cursive',
    pla3: 'Dancing Script, cursive',                /*Best to fun logos*/
    pla4: 'Lobster, cursive',
    pla5: 'Bebas Neue, sans-serif',
    mon1: 'Fira Code, monospace',
    mon2: 'JetBrains Mono, monospace',
    mon3: 'Source Code Pro, monospace',
    mon4: 'Inconsolata, monospace',    
}

export const lightTheme = {
    colors: {
        primary: "black",
        secondary: "#2C3930",
        tertiary: "#213555",
        tunnel: "#2E5077"
    },
    bg: "linear-gradient(to left bottom, #F2EFE7, #9ACBD0, #48A6A7)",
    fonts: fonts
}

export const darkTheme = {
    colors: {
        primary: "#E4E0E1",
        secondary: "#C5D3E8",
        tertiary: "#B6C4B6",
        tunnel: "#DCD7C9"
    },
    bg: "linear-gradient(200deg, #000000, #282A3A,rgb(39, 31, 15))",
    fonts: fonts
}