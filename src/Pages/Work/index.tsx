import styled from "styled-components"
import { motion } from "motion/react"

/* --------------------------------------------- CSS -------------------------------------------- */
const WorkSc = styled.div`
  display: flex;
  flex-direction: column;
  color: #000000; 
  margin-top: 50px;
  padding: 50px 30px;

  .hi{
    /* background-color: #fff; */
    padding: 10px;
    text-align: center;
    width: 60%;
    margin: 20vh auto;

    h1{
      color: #2C3930;
      font-family: var(--font-ele5);
      font-size: 85px;
    }

    h1:first-child{
      line-height: 70%;
    }

    p{
      margin-top: 20px;
      font-size: 18px;
    }
  }

  .works{
    display: flex;
    flex-wrap: wrap;
    gap: 5vw;
    justify-content: space-between;
    height: auto;
    width: 100%;
    padding: 0 50px;
  }
`
const WorkBoxSc = styled(motion.div)<WorkBoxScProps>`
  height: 80vh;
  width: ${({$width})=>($width ? $width : "30%")};
  border-radius: 30px;
  background-color: ${({$bgc})=>($bgc ? $bgc : "#fff")};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
` 

/* ----------------------------------------- INTERFACES ----------------------------------------- */
interface WorkBoxScProps{
  $width?: string
  $bgc?: string
}

/* ------------------------------------------ COMPONENT ----------------------------------------- */
export default function Work() {
  return (
    <WorkSc>
      <section className="hi">
        <motion.h1 
          initial={{y: "-50px"}}
          animate={{ y: 0}}
          transition={{duration: 0.3}}
        >
          Hi. I'm Leandro.
        </motion.h1>
        <motion.h1
          initial={{y: "-50px"}}
          animate={{ y: 0}}
          transition={{duration: 0.3}}
        >
          A Software Developer.
        </motion.h1>
        <motion.p
        initial={{opacity: 0, y: "-30px"}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: 0.3, delay: 0.3 
        }}
        >
          I'm enjoy creating websites and tools that make life easier and more interesting!
        </motion.p>
      </section>
      <section className="works">
        <WorkBoxSc 
          $width="35%"
          $bgc= "#E195AB"
          initial={{opacity: 0 ,y: "-50px"}}
          animate={{opacity: 1 ,y: 0, transition: {duration: 0.3, delay: 0.4}}}
          whileHover={{ scale: 1.05, transition: { duration: 0.2} }}
        >
          project1
        </WorkBoxSc>
        <WorkBoxSc 
          $width="58%"
          $bgc="#e7b89c"
          initial={{opacity: 0 ,y: "-50px"}}
          animate={{opacity: 1 ,y: 0, transition: {duration: 0.3, delay: 0.4}}}
          whileHover={{ scale: 1.05, transition: { duration: 0.2} }} 
        >
         project2 
        </WorkBoxSc>
        <WorkBoxSc
          $width="80%"
          $bgc="black"
          whileHover={{ scale: 1.05, transition: { duration: 0.2} }} 
        >
          project3
        </WorkBoxSc>
      </section>
      <section className="inProgress">
        
      </section>
      <footer>

      </footer>
    </WorkSc>
  )
}
