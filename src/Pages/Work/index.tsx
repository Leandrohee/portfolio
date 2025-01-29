import styled from "styled-components"

/* --------------------------------------------- CSS -------------------------------------------- */
const WorkSc = styled.div`
  display: flex;
  flex-direction: column;
  color: white; 
  margin-top: 50px;
  padding: 50px;
`

/* ------------------------------------------ COMPONENT ----------------------------------------- */
export default function Work() {
  return (
    <WorkSc>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Commodi a quo nostrum temporibus atque? Harum reprehenderit 
      ex placeat repudiandae sint tempore in quas voluptatibus, magni veniam, nulla earum beatae explicabo!
    </WorkSc>
  )
}
