import React from "react"
import {services} from "./data"
import { FaHandPointRight } from "react-icons/fa";

export default function Services(){
    return (
        <section className="services" id="services">
            <div className="title">
                <h2 className="title-text">naša ponuda</h2>
            </div>
            <div className="services-container">
                {services.map(function(service){
                    const {id, image, title, url, text} = service;
                    return (
                        <article key={id} className="service-item service-item-black">
                            <div className="front-text">
                                <img src={image} alt="service image" />
                            </div>
                            <div className="back-text">
                                <h4>{title}</h4>
                                <p>{text}</p>
                                <a href={url}
                                    target="_blank"
                                    rel="noreferrer">
                                    <button className="main-button"><FaHandPointRight/></button>
                                </a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}