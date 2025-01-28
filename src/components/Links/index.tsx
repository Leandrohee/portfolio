import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import {motion}  from "framer-motion"
import { useState } from "react"

/* --------------------------------------------- CSS -------------------------------------------- */
const LinksSc = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2%;
    align-items: center;
    padding: 0 2vw;

    .link{
        text-decoration: none;
        color: white;
        font-weight: 300;
    }


    .divBg{
        min-width: 100px;
        padding: 8px;
        border-radius: 30px;
        text-align: center;
    }

    .divBg.isSelected{
        background-color: #c0bbbb2a;
    }


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
        const [moveWhere, setMoveWhere] = useState()
  


    return (
    <LinksSc >
        {links.map(link => (
            <motion.div
               className={`divBg ${location.pathname == link.link && 'isSelected'}`}
            >
                <Link 
                    key={link.link}
                    className="link"
                    to={link.link}
                >
                        {link.name}
                </Link>
            </motion.div>
        ))}
    </LinksSc>
  )
}
