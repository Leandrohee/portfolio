import styled from "styled-components";
import Rotas from "./Routes";

/* --------------------------------------------- CSS -------------------------------------------- */
const AppSc = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

/* --------------------------------------- MAIN COMPONENT --------------------------------------- */
function App() {
  return (
    <AppSc id="app">
      <Rotas/>
    </AppSc>

  )
}

export default App
