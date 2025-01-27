
import styled from "styled-components"
import Links from "../Links"


const NavbarSc = styled.nav`
    display: flex;
    width: 40%;
    height: 5vh;
    /* background-color: transparent; */
    background-color: red;
    margin: auto;
    margin-top: 2.5vh;
    border-radius: 25px;
`

export default function Navbar() {
  return (
    <NavbarSc>
        <Links/> 
    </NavbarSc>
  )
}
