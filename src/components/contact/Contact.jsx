import React from "react"
import {FaFacebook,FaInstagram,FaTwitter,FaMapMarkerAlt,FaEnvelope,FaGooglePlus,FaPhoneSquareAlt,FaClock} from "react-icons/fa"

export default function Contact(){
    return (
        <>
            <section className="contact" id="contact">
                <div className="title">
                    <h2 className="contact-text">kontakt</h2>
                </div>
                <div className="contact-wrapper">
                    <article className="company-info">
                        <address className="item-info">
                            <a 
                                href="https://bit.ly/31JOuQf" 
                                target="_blank" 
                                rel="noreferrer">
                                <FaMapMarkerAlt className="fa"/>
                            </a>
                            <p>Braće Ribnikar 53, Novi Sad, Serbia</p>
                        </address>
                        <address className="item-info">
                            <FaPhoneSquareAlt className="fa" />
                            <p>+381 66 22 33 77</p>
                        </address>
                        <address className="item-info">
                            <FaEnvelope className="fa" />
                            <p>nemaemail@jbg.com</p>
                        </address>
                        <address className="item-info" style={clockStyle}>
                            <FaClock className="fa"/>
                            <p>Radno vreme:</p>
                            <p>Pet - Sub : 07 - 00h</p>
                            <p>Ned - Čet : 07 - 23h</p>
                        </address>
                    </article>
                </div>
                <div className="footer-icons">
                    <a href="https://www.facebook.com/caffensmichelangelo" target="_blank">
                        <FaFacebook className="fu-fa"/>
                    </a>
                    <a href="https://www.instagram.com/caffe_ns_michelangelo/" target="_blank">
                        <FaInstagram className="fu-fa"/>
                    </a>
                    <a href="https://twitter.com/?lang=en" target="_blank">
                        <FaTwitter className="fu-fa"/>
                    </a>
                    <a href="https://www.planplus.rs/kafe-michelangelo/1560" target="_blank">
                        <FaGooglePlus className="fu-fa"/>
                    </a>
                </div>
            </section>
            <footer>
                <div className="footer-text">
                    <p>Copyright 2020 &copy;DodaDesign All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

const clockStyle = {
    display: "grid",
    rowGap: ".5rem"
}