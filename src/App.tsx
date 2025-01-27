import styled from "styled-components";
import Content from "./components/Content";
import { ParticlesBg } from "./components/ParticlesBg";

/* --------------------------------------------- CSS -------------------------------------------- */
const AppSc = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

/* --------------------------------------- MAIN COMPONENT --------------------------------------- */
function App() {
  return (
    <AppSc>
      {/* ParticlesBg is the background */}
      <ParticlesBg/>
      {/* Content represents all the components in the project */}
      <Content>
        <div style={{color: "white"}}>macaco</div>
      </Content>
    </AppSc>

  )
}

export default App
