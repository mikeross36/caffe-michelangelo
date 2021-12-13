import React from "react"
import {breakfast, italiana, main, desserts} from "./data"

export default function Tab({tabContent}){
    return (
        <>
            {breakfast.map(function(item){
                const {id, label, content} = item;
                return (
                    <article key={id} className={tabContent === 1 ? "tabs-content active-content" : "tabs-content"}>
                        <h3>{label}</h3>
                        {content.map(function(cont){
                            const {id, title, description, price} = cont;
                            return (
                                <div key={id} className="content">
                                    <h4>{title}</h4>
                                    <div>
                                        <p>{description}</p>
                                        <p>{price} din</p>
                                    </div>
                                </div>
                            )
                        })}
                    </article>
                )
            })}
            {italiana.map(function(item){
                const {id, label, content} = item;
                return(
                    <article key={id} className={tabContent === 2 ? "tabs-content active-content" : "tabs-content"}>
                        <h3>{label}</h3>
                        {content.map(function(cont){
                            const {id, title, description, price} = cont;
                            return (
                                <div key={id} className="content">
                                    <h4>{title}</h4>
                                    <div>
                                        <p>{description}</p>
                                        <p>{price} din</p>
                                    </div>
                                </div>
                            )
                        })}
                    </article>
                )
            })}
            {main.map(function(item){
                const {id, label, content} = item;
                return(
                    <article key={id} className={tabContent === 3 ? "tabs-content active-content" : "tabs-content"}>
                        <h3>{label}</h3>
                        {content.map(function(cont){
                            const {id, title, description, price} = cont;
                            return (
                                <div key={id} className="content">
                                    <h4>{title}</h4>
                                    <div>
                                        <p>{description}</p>
                                        <p>{price} din</p>
                                    </div>
                                </div>
                            )
                        })}
                    </article>
                )
            })}
            {desserts.map(function(item){
                const {id, label, content} = item;
                return(
                    <article key={id} className={tabContent === 4 ? "tabs-content active-content" : "tabs-content"}>
                        <h3>{label}</h3>
                        {content.map(function(cont){
                            const {id, title, description, price} = cont;
                            return (
                                <div key={id} className="content">
                                    <h4>{title}</h4>
                                    <div>
                                        <p>{description}</p>
                                        <p>{price} din</p>
                                    </div>
                                </div>
                            )
                        })}
                    </article>
                )
            })}
        </>
    )
}