import { Link} from "react-router-dom"
import styled from "styled-components"
import sun from "../../assets/sunWhite.png"
import moon from "../../assets/moonWhite.png"
import {motion}  from "framer-motion"
import { useEffect, useRef, useState } from "react"


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
        /* background-color: #0dc04f4a; */
        display: flex;
        align-items: end;
        justify-content: space-around;
        height: 40%;
        width: 100%;
        padding: 10px;
        cursor: pointer;
        padding-bottom: 50px;
        margin-top: 10vh;
    }
`

const Stick = styled.div<StickProps>`
    width: 100%;
    height: 60px;
    /* background-color: #ffffff48; */
    display: flex;
    justify-content: start;
    align-items: end;
    
    .stick-contant{
        height: ${({$isSelected,$isSibling})=>(
            $isSelected 
                ? '50px' 
                : $isSibling 
                ? '30px'
                : '20px'
        )};
        margin-bottom: ${({$isSelected, $isSibling})=>(
                $isSelected 
                ? '10px' 
                : $isSibling 
                ? '5px'
                : ''
        )};
        width: 2px;
        background-color: ${({$dayHour})=>(
            $dayHour >= 6 && $dayHour <= 18 
                ? "#FEFAE0" : "#000"
        )};
        pointer-events: none;
    }

    &:hover{
        .stick-contant{
            height: ${({$isSelected})=>($isSelected ? '50px' : '45px')};
            transition: height .2s;
            margin-bottom: 10px;
        }
    }

`

const Sun = styled(motion.img)`
    position: relative;
    background-color: #0A2E36;
    padding: 11px;
    height: 50px;
    border-radius: 50%;
`
/* ----------------------------------------- INTERFACES ----------------------------------------- */
interface StickProps{
    $isSelected?: boolean;
    $isSibling?: boolean;
    $dayHour: number;
}


/* ------------------------------------- LINKS IN THE FOOTER ------------------------------------ */
const githubLink = "https://github.com/Leandrohee"
const linkedinLink = "https://www.linkedin.com/in/leandro-h-torres/"
const cvLink = "https://drive.google.com/file/d/1vn7Ey99ql1eClP7xkpVV9zvAuyp4Uill/view?usp=sharing"
const contactLink = "/contact"


/* ------------------------------------------ COMPONENT ----------------------------------------- */
export default function Footer() {

    const [stickSelected, setStickSelect] = useState<number>(12)
    const [positionIcon, setPositionIcon] = useState<(number)[]>([])
    const stickRef = useRef<(HTMLDivElement|null)[]>([])
    const themeDiv = useRef<(HTMLDivElement|null)[]>([])

    //Cada elemento dessa array representa 1 hora do dia
    const arr = Array.from({ length: 24 }, (_, index) => index);

    //Carregando a posicao ao entrar na pagina
    useEffect(()=>{
        getStickPosition()
    },[])

    //Mudando a posicao do stick
    function getStickPosition(element?: HTMLDivElement){
        let currerrentStick = stickRef.current[12]
        element 
            ? currerrentStick = element 
            : currerrentStick = stickRef.current[12]

        const leftPosition = currerrentStick?.offsetLeft;
        const topPosition = currerrentStick?.offsetTop;
        let width = currerrentStick?.offsetWidth ?? 0
        if(width) {width =  width/2}
        const divPosition = themeDiv.current[0]?.offsetLeft

        setPositionIcon([leftPosition ?? 0, topPosition ?? 0, width, divPosition ?? 0])
    }

    //Clicando em algum stick
    function handleClick(event: React.MouseEvent<HTMLDivElement>){
        const target = event.target as HTMLDivElement
        setStickSelect(Number(target.dataset.key) ?? 0)
        getStickPosition(target)
    }

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
            <div 
                className="themePicker" 
                ref={(element)=> (themeDiv.current[0] = element)} >                     {/*Descrobrindo a distancia da div pai dos sticks  */}
                { positionIcon[0] &&
                    <Sun
                        initial={{ 
                            left: positionIcon[0] - positionIcon[3] - 30,               //Esse 30 é +- a width da imagem sun ou moon
                            top: -50
                        }}
                        animate={{ 
                            left: positionIcon[0] - positionIcon[3] - 30, 
                            top: -50,
                            opacity: [0,0,1],
                            transition:{
                                duration:  0.2
                            }
                        }}
                        src={stickSelected > 18 || stickSelected < 6 ? moon : sun}
                    />
                } 

                {arr.map(item => (
                    <Stick
                        $isSelected={stickSelected == item ? true : false}
                        $isSibling={
                            stickSelected == item + 1 || stickSelected ==  item - 1
                            ? true : false
                        }
                        $dayHour={item}
                        key={item}
                        data-key={item}
                        ref= {(element) => (stickRef.current[item] = element)}
                        onClick={handleClick}
                    >
                        <div className="stick-contant"></div>
                    </Stick>
                ))}
            </div>  
        </FooterSc>
    )
}
