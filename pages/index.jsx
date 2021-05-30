import React from "react";
import Head from "next/head";

import Landing from "../components/home/landing";
import WhatWeDo from "../components/home/what_we";
import Our from "../components/home/our";
import Clientele from "../components/home/clientele";
import Create from "../components/home/create";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* SEO */}
      <Head>
        <title>Beyond Design Studio</title>
      </Head>

      <Landing />
      
      <WhatWeDo />

      <Our 
        second={"Team"}
        content={"We aim to create designs that speak for themselves. We create, evaluate and recreate– we make no compromises to achieve that. Ultimately, our aim is to elevate brands by providing a unique footing for them in the digital world. We like to keep it simple, yet significant."}
      />

      <Our
        second={"Work"}
        content={"We aim to create designs that speak for themselves. We create, evaluate and recreate– we make no compromises to achieve that. Ultimately, our aim is to elevate brands by providing a unique footing for them in the digital world. We like to keep it simple, yet significant."}
      />

      <Clientele 
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

      <Create />

    </div>
  );
}
