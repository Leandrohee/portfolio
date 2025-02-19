
import styled from "styled-components"
import Links from "../Links"
import { useEffect, useState } from "react"
import { lightTheme } from "../../style/theme"


const NavbarSc = styled.nav<NavBarScProps>`
    position: fixed;                          //config related to fixed - margin doesnt work with fixed
    left: 50vw;                               //config related to fixed
    translate: -50% 50%;                      //config related to fixed (x,y)
    width: 500px;                              //config related to size of the navbar
    height: 6vh;                              //config related to size of the navbar
    border-radius: 25px;                      //config related to size of the navbar
    display: flex;
    background-color: ${({$scroolPosition, theme})=>(
      $scroolPosition < 50 ? "transparent" :
      $scroolPosition > 50 && $scroolPosition < 200 
        ? theme === lightTheme ? "#81adcc54" :  "#29323f" :
      $scroolPosition > 200 
        ? theme === lightTheme ? "#81adcc" :  "#29323f"
        : ""
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
