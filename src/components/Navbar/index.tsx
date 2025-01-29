
import styled from "styled-components"
import Links from "../Links"


const NavbarSc = styled.nav`
    position: fixed;                          //config related to fixed - margin doesnt work with fixed
    left: 50vw;                               //config related to fixed
    translate: -50% 50%;                      //config related to fixed (x,y)
    width: 50vw;                              //config related to size of the navbar
    height: 6vh;                             //config related to size of the navbar
    border-radius: 25px;                      //config related to size of the navbar
    display: flex;
    background-color: transparent;
    /* background-color: red; */
`

export default function Navbar() {
  return (
    <NavbarSc>
        <Links/> 
    </NavbarSc>
  )
}
