import React from "react"
import nextId from "react-id-generator"
import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"
import chef1 from "../../../public/images/chef1.jpg"
import chef2 from "../../../public/images/chef2.jpg"
import chef3 from "../../../public/images/chef3.jpg"
import chef4 from "../../../public/images/chef4.jpg"

export const team = [
    {
        id: nextId(),
        image: chef1, 
        name:"John Doe", 
        title:"master chef",
        socialIcons: [
            {
                id: nextId(),
                url: "https://twitter.com/login?lang=en",
                icon: <FaTwitter />
            },
            {
                id: nextId(),
                url: "https://www.facebook.com/",
                icon: <FaFacebook />
            },
            {
                id: nextId(),
                url: "https://www.instagram.com/accounts/login/",
                icon: <FaInstagram />
            },
        ]
    },
    {
        id: nextId(),
        image: chef2, 
        name:"Jane Doe", 
        title:"vice master chef",
        socialIcons: [
            {
                id: nextId(),
                url: "https://twitter.com/login?lang=en",
                icon: <FaTwitter />
            },
            {
                id: nextId(),
                url: "https://www.facebook.com/",
                icon: <FaFacebook />
            },
            {
                id: nextId(),
                url: "https://www.instagram.com/accounts/login/",
                icon: <FaInstagram />
            },
        ]
    },
    {
        id: nextId(),
        image: chef3, 
        name:"John Smith", 
        title:"master chef",
        socialIcons: [
            {
                id: nextId(),
                url: "https://twitter.com/login?lang=en",
                icon: <FaTwitter />
            },
            {
                id: nextId(),
                url: "https://www.facebook.com/",
                icon: <FaFacebook />
            },
            {
                id: nextId(),
                url: "https://www.instagram.com/accounts/login/",
                icon: <FaInstagram />
            },
        ]
    },
    {
        id: nextId(),
        image: chef4, 
        name:"Jane Smith", 
        title:"kitchen chef",
        socialIcons: [
            {
                id: nextId(),
                url: "https://twitter.com/login?lang=en",
                icon: <FaTwitter />
            },
            {
                id: nextId(),
                url: "https://www.facebook.com/",
                icon: <FaFacebook />
            },
            {
                id: nextId(),
                url: "https://www.instagram.com/accounts/login/",
                icon: <FaInstagram />
            },
        ]
    },
]