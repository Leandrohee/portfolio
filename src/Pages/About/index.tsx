import styled from "styled-components"
import leandroImg from "../../assets/leandro.png"
import {motion} from 'framer-motion'
import Tunnel from "../../components/Tunnel"

/* --------------------------------------------- CSS -------------------------------------------- */
const AboutSc = styled.div`
    height: auto;
    width: 100%;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
      margin-top: 5vh;
      font-size: 85px;
      font-family: ${({theme})=>(theme.fonts.ele5)};
      color: ${({theme})=> theme.colors.tertiary};
    }

    .aboutMe{
      /* background-color:#ff000051; */
      display: flex;
      align-items: center;
      height: calc(100vh - 35vh);
      margin: 5vh 15vw 10vh 15vw;
    }

   .aboutMeText{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    width: 60%;
    margin-left: auto;
   }

   p{
    margin: 1vh 0;
   }

   p:first-child{
    color: ${({theme})=> theme.colors.tertiary}; 
    font-size: 45px;
    font-family: ${({theme})=>(theme.fonts.ele5)};
   }

   .aboutWork{
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 0 3vw;
    gap: 10px 0;
   }

   .aboutPersonal{
    /* background-color: #ff000034; */
    display: flex;
    font-size: 20px;
    line-height: calc(100% + 10px);
    display: flex;
    margin: 5vh 0;
    flex-direction: column;
    padding-left: 30%;

    span:first-child{
      font-family: ${({theme})=>(theme.fonts.ele5)};
      font-size: 40px;
      width: 90%;
      line-height: calc(100% + 10px);
      font-weight: bold;
      /* color: ${({theme})=> theme.colors.tunnel}; */
      color: ${({theme})=> theme.colors.tertiary};
      margin-bottom: 4vh;
    }

    span{
      font-size: 20px;
      width: 60%;
      text-align: justify;
    }

    a{
      font-size: 26px;
      font-family: ${({theme})=>(theme.fonts.ele5)};
      color: ${({theme})=> theme.colors.tertiary};
    }


   }

`

const LeandroImg = styled(motion.div)`
  width: 300px;
  height: 400px;
  border-top-right-radius: 150px;
  border-top-left-radius: 150px;
  background-color: #fff;
  background-image: url(${leandroImg}) ;
  background-size: 130%; 
  background-position: calc(50% - 10px) calc(50% - 30px); 
  background-repeat: no-repeat;
`

const Divisor = styled.div`
  width: 5vw;
  height: 1px;
  background-color: ${({theme})=> theme.colors.tunnel};
  border-radius: 10px;
  margin: 15vh 0 15vh 0;
  background-color: transparent;
`

/* ------------------------------------------ COMPONENT ----------------------------------------- */
export default function About() {
  return (
    <AboutSc>
      <motion.h1
        initial={{y: "-50px"}}
        animate={{y: 0}}
        transition={{duration:0.3}}
      >
        I'm Leandro.
      </motion.h1>
      <div className="aboutMe">
        <LeandroImg
          initial={{opacity: 0 ,y: "-50px"}}
          animate={{opacity: 1 ,y: 0}}
          transition={{duration:0.3, delay:0.3}}
        />
        <motion.div 
          className="aboutMeText"
          initial={{opacity: 0, y: "-50px"}}
          animate={{opacity: 1, y: 0}}
          transition={{duration:0.3, delay:0.4}}
        >
          <p>I'm a Brazilian software developer doing what i love.</p>
          <p>I've been woorking with software developer since 2023, i have build websites
            from scratch, automated boring tasks, manage databases and created backend servers.  
          </p>
          <p>
            Every day i'm focus on improving my experience and enhancing my work. I'm always hungry 
            to learn and built.
          </p>
        </motion.div>
      </div>
      <div className="aboutWork">
        <Tunnel
          width="20%"
          marginLeft="80%"
          titulo="Freelancer"
          funcao="Full Stack projects "
          tempo="25~"
        />
        <Tunnel
          width="70%"
          marginLeft="30%"
          titulo="CBMDF"
          funcao="Full Stack developer"
          tempo="24~"
        />
        <Tunnel
          width="40%"
          titulo="Study"
          funcao="Personal projects"
          tempo="23-24"
        />
      </div>
      <div className="aboutPersonal">
        <span>
          I've always believed that technology has the power to change lives,
          and digital tools are essential for making life better.
        </span>
        <span>
          For me, building software is about turning ideas into reality. I love understanding how 
          things work and connecting different pieces to create something meaningful. That’s what drives 
          me as a full-stack developer—I want to grasp the entire process, from user experience and application 
          logic to server architecture and networking. <a>I believe that to be a great maestro, you need to understand every instrument.</a>
        </span>
      </div>
      <Divisor/>
    </AboutSc>
  )
}
