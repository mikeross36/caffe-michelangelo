import React from "react"
import {team} from "./data"

export default function Team(){
    return(
        <section className="team" id="team">
            <div className="title">
                <h2 className="team-title">naš tim</h2>
            </div>
            <div className="team-wrapper">
                {team.map(function(member){
                    const {id, image, name, title, socialIcons} = member;
                    return (
                        <article key={id} className="team-member">
                            <img src={image} alt="team member" />
                            <div className="img-footer">
                                <div className="footer-info">
                                    <h3>{name}</h3>
                                    <h5>{title}</h5>
                                    <div className="social-icons">
                                        {socialIcons.map(function(socIcon){
                                            const {id, url, icon} = socIcon;
                                            return (
                                                <a 
                                                    key={id} 
                                                    href={url}
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    {icon}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}