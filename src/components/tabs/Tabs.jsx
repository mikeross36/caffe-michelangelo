import React from "react"
import {FaHamburger, FaPizzaSlice, FaIceCream, FaDrumstickBite} from "react-icons/fa"
import Tab from "./Tab"

export default function Tabs({tabContent, toggleTab}){

    return(
        <section className="tabs" id="tabs">
            <div className="tabs-container">
                <div className="tabs-header">
                    <h2>menu</h2>
                </div>
                <div className="tabs-btn-box">
                    <button className={tabContent === 1 ? "btn1 active" : "btn1"}
                        onClick={function(){
                            toggleTab(1)
                        }}>
                        <FaHamburger className="btn-icon1" />
                        <p className="btn-text">Doručak</p>
                    </button>
                    <button className={tabContent === 2 ? "btn2 active" : "btn2"}
                        onClick={function(){
                            toggleTab(2)
                        }}>
                        <FaPizzaSlice className="btn-icon2" />
                        <p className="btn-text">Italiana</p>
                    </button>
                    <button className={tabContent === 3 ? "btn3 active" : "btn3"}
                        onClick={function(){
                            toggleTab(3)
                        }}>
                        <FaDrumstickBite className="btn-icon3" />
                        <p className="btn-text">Glavna</p>
                    </button>
                    <button className={tabContent === 4 ? "btn4 active" : "btn4"}
                        onClick={function(){
                            toggleTab(4)
                        }}>
                        <FaIceCream className="btn-icon4" />
                        <p className="text-btn">Dezerti</p>
                    </button>
                </div>
                <Tab tabContent={tabContent}/>
            </div>
        </section>
    )
}