
import styled from "styled-components"
import Links from "../Links"
import { useEffect, useState } from "react"


const NavbarSc = styled.nav<NavBarScProps>`
    position: fixed;                          //config related to fixed - margin doesnt work with fixed
    left: 50vw;                               //config related to fixed
    translate: -50% 50%;                      //config related to fixed (x,y)
    width: 500px;                              //config related to size of the navbar
    height: 6vh;                              //config related to size of the navbar
    border-radius: 25px;                      //config related to size of the navbar
    display: flex;
    background-color: ${({$scroolPosition})=>(
      $scroolPosition > 50 && $scroolPosition < 200 ? "#81adcc31" :
      $scroolPosition > 200 ? "#81adcc" :
       "transparent"
    )};
    z-index: 1;
`

interface NavBarScProps{
  $scroolPosition: number
}


export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(()=>{
    const handleScroll = () => {
      setScrollY(window.scrollY);             // Update the scroll position
    };

    window.addEventListener("scroll",handleScroll)

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  return (
    <NavbarSc
      $scroolPosition={scrollY}
    >
        <Links/> 
    </NavbarSc>
  )
}
