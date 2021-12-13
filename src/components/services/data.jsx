import nextId from "react-id-generator"
import dorucak from "../../../public/images/fried-egg.png"
import sandwich from "../../../public/images/sandwich.png"
import spaggethi from "../../../public/images/spaggethi.png"
import njoke from "../../../public/images/macaroni.png"
import tortilje from "../../../public/images/tortilja.png"
import salate from "../../../public/images/salata.png"
import pancake from "../../../public/images/pancake.png"
import curetina from "../../../public/images/curetina.png"

export const services = [
    {
        id: nextId(),
        image: dorucak,
        title: "doručak",
        url: "https://bit.ly/2HTMApl",
        text: "Jaja na oko sa viršlom, omlet šunka, omlet šunka-sir, kajgana, kajgana sa paprikom, kajgana sa slaninom...",
    },
    {
        id: nextId(),
        image: sandwich,
        title: "sendviči",
        url: "https://bit.ly/2HTMApl",
        text: "Pizza sendvič šunka, Pizza sendvič suvi vrat, sendvič sa tunjevinom...",
    },
    {
        id: nextId(),
        image: spaggethi,
        title: "špagete i paste",
        url: "https://bit.ly/2HTMApl",
        text: "Bolonjeze, karbonara, ćureća pasta, matriciana pasta, pasta verde, polo kari pasta...",
    },
    {
        id: nextId(),
        image: njoke,
        title: "njoke",
        url: "https://bit.ly/2HTMApl",
        text: "Quatro formaggio njoke, green njoke, njoke sa karijem...",
    },
    {
        id: nextId(),
        image: tortilje,
        title: "tortilje",
        url: "https://bit.ly/2HTMApl",
        text: "Burito sa piletinom, tortilja sa belim mesom, tortilja sa kulenom, tortilja sa šunkom...",
    },
    {
        id: nextId(),
        image: salate,
        title: "obrok salate",
        url: "https://bit.ly/2HTMApl",
        text: "Cezar salata, mikelanđelo salata, salata sa belim mesom, salata sa tunjevinom...",
    },
    {
        id: nextId(),
        image: pancake,
        title: "palačinke",
        url: "https://bit.ly/2HTMApl",
        text: "Palačinka Mikelanđelo, rolovane palačinke sa šunkom, mikelanđelo slatke palačinke...",
    },
    {
        id: nextId(),
        image: curetina,
        title: "ćuretina mlinci",
        url: "https://bit.ly/2HTMApl",
        text: "Ćuretina, mlinci, sir, kisela pavlaka, neutralna pavlaka, bujon",
    }
]