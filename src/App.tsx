import styled, { ThemeProvider } from "styled-components";
import Rotas from "./Routes";
import { GlobalStyle } from "./style/GlobalStyle";
import { useThemeContext } from "./context/themeToogle";

/* --------------------------------------------- CSS -------------------------------------------- */
const AppSc = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

/* --------------------------------------- MAIN COMPONENT --------------------------------------- */
function App() {
  const themeProvider = useThemeContext()

  return (
    <ThemeProvider theme={themeProvider.theme}>
      <GlobalStyle/>
        <AppSc id="app">
          <Rotas/>
        </AppSc>
    </ThemeProvider>

  )
}

export default App
