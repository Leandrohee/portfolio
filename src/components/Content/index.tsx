/* ---------------- COMPONENTE RESPONSABLE FOR WRAPING ALL THE OTHERS COMPONENTS ---------------- */

import styled from "styled-components"

/* --------------------------------------------- CSS -------------------------------------------- */
const ContextSc = styled.div`
    position: relative;
`

/* ------------------------------------------ COMPONENT ----------------------------------------- */
export default function Content({children}: {children: React.ReactNode}) {
  return (
    <ContextSc>
        {children}
    </ContextSc>
  )
}
