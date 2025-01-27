/* ----------------------------- FILE RESPONSABLE FOR HANDLE ROUTES ----------------------------- */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Work from "../Pages/Work";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const RotasSc = styled.div`
  height: 100%;
  width: 100%;
`


export default function Rotas() {
  return (

    <Router basename="/portfolio">
        <Navbar/>                                                   {/*Navbar is paralel to all the routes*/}
        <Routes>
            <Route path="" element={<Work/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
  )
}
