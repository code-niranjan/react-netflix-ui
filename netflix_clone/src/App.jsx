import { Header } from "./components/Header"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PopularNow } from "./components/PopularNow";
import Plan from "./components/Plan";
import Foq from "./components/Foq";
import { Hero } from "./components/Hero";
import { CTA } from "./components/CTA";
import { OnlyOnNetflix } from "./components/OnlyOnNetflix";
import { ReasonToJoin } from "./components/ReasonToJoin";
import { LastButton } from "./components/LastButton";
import { Footer } from "./components/Footer";

function App() {


  return (
    <>
    <Header/>
    <Navbar/>
    <Hero/>
    <CTA/>
    <PopularNow/>
    <OnlyOnNetflix/>
    <Plan/>
    <ReasonToJoin/>
    <Foq/>
    <LastButton/>
    <Footer/>
    </>
  )
}

export default App
