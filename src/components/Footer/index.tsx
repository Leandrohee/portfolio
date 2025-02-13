import { Link } from "react-router-dom"
import styled from "styled-components"
import sun from "../../assets/sunWhite.png"



/* --------------------------------------------- CSS -------------------------------------------- */
export const FooterSc = styled.footer`
    /* background-color: #ffffff39; */
    height: 40vh;
    width: 100%;
    margin-top: auto;
    padding: 0 10%;

    .informations{
        display: flex;
        justify-content: center;
        margin: auto;
        height: 60%;
        width: 100%;
        padding: 10px;
        /* background-color: #15088976; */

        .divFooterEsq{
            /* background-color: #fff; */
            width: 35%;
        }

        .divFooterDir{
            width: 35%;
            /* background-color: #dc0fc0; */
            display: flex;
            justify-content: end;
            gap: 10%;

            .footerLinks{
                display: flex;
                flex-direction: column;
                gap: 7%;
                height: 100%;
            }

            .footerContact{
                display: flex;
                flex-direction: column;
                gap: 7%;
                height: 100%;
            }

            p:first-child{
                font-size: 20px;
                font-weight: 400;
            }

            a{
                font-size: 18px;
                text-decoration: none;
                color: black;
            }
        }
    }

    .themePicker{
        background-color: #0dc04f4a;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 40%;
        width: 100%;
        padding: 10px;
    }
`

const Stick = styled.div`
    width: 2px;
    height: 30px;
    background-color: #000;
    /* margin: 0 25px; */
    /* transform: scaley(2); */
`

const Sun = styled.img`
    position: absolute;
    background-color: #0A2E36;
    padding: 11px;
    height: 45px;
    border-radius: 50%;
`

/* ------------------------------------- LINKS IN THE FOOTER ------------------------------------ */
const githubLink = "https://github.com/Leandrohee"
const linkedinLink = "https://www.linkedin.com/in/leandro-h-torres/"
const cvLink = "https://drive.google.com/file/d/1vn7Ey99ql1eClP7xkpVV9zvAuyp4Uill/view?usp=sharing"
const contactLink = "/contact"


/* ------------------------------------------ COMPONENT ----------------------------------------- */
export default function Footer() {

    const arr = Array.from({ length: 24 }, (_, index) => index);

  return (
    <FooterSc>
        <div className="informations">
            <div className="divFooterEsq">
                © 2025 Leandro Torres • Colophon
            </div>
            <div className="divFooterDir">
                <div className="footerLinks">
                    <p>Elsewhere</p>
                    <p><a href={githubLink}>GitHub</a></p>
                    <p><a href={linkedinLink}>Linkedin</a></p>
                    <p><a href={cvLink}>CV</a></p>
                </div>
                <div className="footerContact">
                    <p>Contact</p>
                    <p><Link to={contactLink} >Contact</Link></p>
                </div>
            </div>
        </div>
        <div className="themePicker"> 
            <Sun
                src={sun}
            />


            {arr.map(item => (
                <Stick 
                    key={item}
                />
            ))}
        </div>  
    </FooterSc>
  )
}
