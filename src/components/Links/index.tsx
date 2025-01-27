import { Link } from "react-router-dom"
import styled from "styled-components"

/* --------------------------------------------- CSS -------------------------------------------- */
const LinksSc = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw;

    .link{
        text-decoration: none;
        color: white;
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
  
    return (
    <LinksSc>
        {links.map(link => (
            <Link className="link" to={link.link}>{link.name}</Link>
        ))}
    </LinksSc>
  )
}
