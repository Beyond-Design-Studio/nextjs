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

const moveSectionUp = () => {
    fullpage_api.moveTo(1, 0);
}

const moveToFooter = () => {
    fullpage_api.moveTo(7, 0);
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
            content={"We are a dynamic team of designers specialising in UI/UX, development and visual design. We work closely to ensure that the designs we make strengthen your brand image. We are a one stop for all your design needs, you needn’t look further."} />
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
        component: <Create moveToFooter={moveToFooter} />
    },
    {
        text: "Section Footer",
        component: <Footer moveSectionUp={moveSectionUp} />
    }
]

export default HomeData;