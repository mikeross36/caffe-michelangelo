import React, {useState} from "react"
import Header from "./components/header/Header"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Tabs from "./components/tabs/Tabs"
import About from "./components/about/About"
import Team from "./components/team/Team"
import Contact from "./components/contact/Contact"

export default function App(){
    const [showMobMenu, setShowMobMenu] = useState(false)
    const [tabContent, setTabContent] = useState(1)

    const toggleMobMenu = function(){
        setShowMobMenu(!showMobMenu)
    }

    const closeMobMenu = function(){
        setShowMobMenu(false)
    }

    const toggleTab = function(index){
        setTabContent(index)
    }

    return (
        <>
            <Header 
                toggleMobMenu={toggleMobMenu}
                showMobMenu={showMobMenu}
                closeMobMenu={closeMobMenu}
            />
            <Services/>
            <Portfolio />
            <Tabs 
                tabContent={tabContent}
                toggleTab={toggleTab}
            />
            <About />
            <Team />
            <Contact />
        </>
    )
}