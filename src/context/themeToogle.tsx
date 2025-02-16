/* --------------------- ARQUIVO RESPONSAVEL POR LIDAR POR A MUDANCA DE TEMA -------------------- */

import {useContext, createContext, useState, ReactNode, Dispatch, SetStateAction} from 'react'
import { lightTheme, darkTheme } from '../style/theme'

interface ThemeContextProps{
    theme: typeof lightTheme | typeof darkTheme;
    setThemeLight: Dispatch<SetStateAction<typeof lightTheme>>|any;
    setThemeDark: Dispatch<SetStateAction<typeof darkTheme>>|any;
    toogleTheme: Dispatch<SetStateAction<typeof lightTheme | typeof darkTheme>>|any;
}

/* ------------------------------- CRIANDO UM CONTEXT PARA O TEMA ------------------------------- */
export const ThemeContext = createContext<ThemeContextProps|undefined>(undefined);


/* ------------------- PROVIDER PARA DISTRIBUIR O CONTEXT PARA TODO O PROJETO ------------------- */
export function ThemeProvider({children}: {children: ReactNode}){
    const [theme, setTheme] = useState(lightTheme);

    function setThemeLight(){
        setTheme(lightTheme)
    }

    function setThemeDark(){
        setTheme(darkTheme)
    }

    function toogleTheme(){
        const newTheme = theme === lightTheme ? darkTheme : lightTheme
        setTheme(newTheme)
    }

    return(
        <ThemeContext.Provider
            value={{
                theme,
                setThemeLight,
                setThemeDark,
                toogleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

/* -- CRIANO UM HOOK PERSONALIZADO PARA NAO PRECISAR IMPORTAR O USECONTEXT() E O AuthContext SEMPRE -- */
export function useThemeContext(){
    const themeProvider = useContext(ThemeContext)
    if (!themeProvider) {
        throw new Error("useThemeContext must be used within a themeProvider");
    }
    return themeProvider
}

/* ----------------------------------------- INFORMACOES ---------------------------------------- */
/*
Para usar a variavel theme e o metodo setTheme em qualquer página é só:

1. Aplicar o ThemeContext envolvendo o arquivo root no caso aqui o main.ts 

2. Importar o useThemeContext

3. Carregar ele na pagina especifica assim:
    const themeProvider = useThemeContext();

4. Comecar a usar assim:
    console.log(themeProvider?.theme)
    console.log(themeProvider?.setTheme)
 
*/