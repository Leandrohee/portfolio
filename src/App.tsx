import styled from "styled-components";
import Rotas from "./Routes";

/* --------------------------------------------- CSS -------------------------------------------- */
const AppSc = styled.div`
  height: 100%;
  width: 100%;
`

/* --------------------------------------- MAIN COMPONENT --------------------------------------- */
function App() {
  return (
    <AppSc>
      <Rotas/>
    </AppSc>

  )
}

export default App
