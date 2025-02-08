import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import {motion}  from "framer-motion"
import { useEffect, useRef, useState } from "react"

/* --------------------------------------------- CSS -------------------------------------------- */
const LinksSc = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2%;
    align-items: center;
    
    .link{
        text-decoration: none;
        color: black;
        font-weight: 300;
        min-width: 100px;
        padding: 8px;
        border-radius: 30px;
        text-align: center;
    }
`

const BgLinkSc = styled(motion.div)`
    position: fixed;                        //Fixed is related to the body, while absolute is related to the parent
    width: 100px;
    height: 40px;
    background-color: #a5cdea;
    border-radius: 30px;
    z-index: -1;                            //Make it lower then the other
`

/* ------------------------------------------ COMPONENT ----------------------------------------- */
export default function Links() {
        const links = [
            {
                name: "Work",
                link: "/"
            },
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Skills",
                link: "/skills"
            },
            {
                name: "Contact",
                link: "/contact"
            },
        ]
        const location = useLocation()
        const [position, setPosition] = useState({left: 0, width: 0})                           //Position of the Link background 
        const linksRef = useRef<(HTMLAnchorElement | null)[]>([])

        //Getting the position of current BgLink based on the current page
        useEffect(() => {
            changePosition()
            window.addEventListener("resize", changePosition);                                          //Adding the event listener to change the position of the BgLink every time it resize the page
            return () => window.removeEventListener("resize", changePosition);                          //Removing the event listener so it dont have to many event listeners
        }, [location.pathname]);                                                                        //Only trigger the useEffect when the page is mounted or when the url changes
                    

        //Function only used in the useEffects to change the  position of the BgLink
        function changePosition(){
            const currentLink = getCurrentLink()
            if(currentLink){
                const firstLink = {
                    left: currentLink.offsetLeft,                                               //Getting the position related to the parent <LinkSc/>
                    top: currentLink.offsetTop,                                                 //Getting the position related to the parent <LinkSc/>
                    width: currentLink?.getBoundingClientRect().width                           //Getting the information of the element related to the body
                }
                console.log(firstLink)
                setPosition({left: firstLink.left, width: firstLink.width})                     
            }
        }

        //Function used by the useEffect for discover the current link (string)
        function getCurrentLink (){
            let currentLink = linksRef.current.find(link => 
                link?.innerHTML.toLowerCase() == location.pathname.replace("/","")
            )
            if (location.pathname == "/") currentLink = linksRef.current[0]
            return currentLink
        }

        //Changing the position of the BgLinkSc
        function handleClick(event: React.MouseEvent<HTMLAnchorElement>){
            setPosition({
                left: event.currentTarget.offsetLeft,
                width: event.currentTarget?.getBoundingClientRect().width                           //Getting the information of the element related to the body
            })
        }


    return (
    <LinksSc >
        { position.left !== 0 &&                                                                        //Only render with the position is defined
            <BgLinkSc
                initial={{ left: position.left}}                                                //Initial position                                                      
                animate={{ left: position.left}}                                                        //Ensures animation updates
                transition={{
                    duration: 0.2,
                    delay: 0.0,                                                                         //Time to start the transition
                }}      
            />
        }
        {links.map((link, index) => (
                <Link 
                    key={index}
                    className="link"
                    to={link.link}
                    onClick={handleClick}
                    ref={(element)=> (linksRef.current[index] = element)}                               //Getting the html of every Link
                >
                        {link.name}
                </Link>
        ))}
    </LinksSc>
  )
}


/* ----------------------------------------- INFORMATION ---------------------------------------- */
/*
    This page is rather complex, it involves:
        useLocation, 
        framer-motion (animation, transition, initial),
        useRef to reference HTML elements
        location of the HTML elements relation to parents (offsetLeft, offsetTop)
        location of the HTML elements relation to Body (getBoundingClientRect)
        eventListeners to monitor the size of the screen


*/