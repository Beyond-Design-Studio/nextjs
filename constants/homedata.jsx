import ReactFullpage from "@fullpage/react-fullpage";

import Landing from "../components/home/landing";
import WhatWeDo from "../components/home/what_we";
import Our from "../components/home/our";
import Clientele from "../components/home/clientele";
import Create from "../components/home/create";
import Footer from "../components/footer";

const moveSectionDown = () => {
    fullpage_api.moveSectionDown();
}

const moveSection = () => {
    console.log("Here for Scroll")
    fullpage_api.moveSectionUp();
}

const HomeData = [
    {
        text: "Section Landing",
        component: <Landing moveSectionDown={moveSectionDown} />
    },
    {
        text: "Section WhatWeDo",
        component: <WhatWeDo
            content={"We aim to create designs that speak for themselves. We create, evaluate and recreate– we make no compromises to achieve that. Ultimately, our aim is to elevate brands by providing a unique footing for them in the digital world. We like to keep it simple, yet significant."} />
    },
    {
        text: "Section Our",
        component: <Our
            second={"Team"}
            re={"Team"}
            link={"/team"}
            content={"We aim to create designs that speak for themselves. We create, evaluate and recreate– we make no compromises to achieve that. Ultimately, our aim is to elevate brands by providing a unique footing for them in the digital world. We like to keep it simple, yet significant."} />
    }
    ,
    {
        text: "Section Work",
        component: <Our
            second={"Work"}
            re={"Projects"}
            link={"/work"}
            content={"We aim to create designs that speak for themselves. We create, evaluate and recreate– we make no compromises to achieve that. Ultimately, our aim is to elevate brands by providing a unique footing for them in the digital world. We like to keep it simple, yet significant."}
        />
    },
    {
        text: "Section Clientele",
        component: <Clientele
            clients={
                [
                    {
                        key: "ebola",
                        img: "/ebola.png"
                    },
                    {
                        key: "radio",
                        img: "/radio.png"
                    },
                    {
                        key: "yugma",
                        img: "/yugma.png"
                    },
                ]
            }
        />
    }
    ,
    {
        text: "Setion Create",
        component: <Create />
    },
    {
        text: "Section Footer",
        component: <Footer moveSection={moveSection} />
    }
]

export default HomeData;