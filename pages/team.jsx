import React from "react";
import Head from "next/head";

import {Sidenav} from "../components/team/misc";
import Lead from "../components/team/lead";
import Dev from "../components/team/dev";
import Admin from "../components/team/admin";
import UiUx from "../components/team/ui_ux";
import Vpd from "../components/team/vpd";

const Team = () => {
  return (
    <div className="w-full min-h-screen">

      <Head>
        <title>Meet Our Team</title>
        <meta name="description" content="We are a team of young, dynamic and aspiring designers who give our 100% to every project we take up. Our work shows not only our skills but also the hours of dedication we put into researching our designs. We create, evaluate and recreate– we make no compromises. Our motto is to keep it simple, yet significant. Our dedicated members of the visuala nd brand design team, UI/UX team  and the development team make sure that you get what you came for by meeting all your requirements. This process is aided by the administrative team with constant client support and by clearing all your doubts. They also make our profiles on Instagram, Facebook, LinkedIn, Twitter, Behance, Fiverr vibrant and lively by posting regular content and updates. To keep our audiences engaged and enthralled. " />
      </Head>

      <div className="flex h-full">
        
        <div className="hidden xl:block">
          <Sidenav />
        </div>

        <div className="p-4 xl:p-0 ml-0 xl:ml-64 mt-24 xl:mt-24 w-full grid grid-cols-1 gap-32">
          <Lead />
          <Dev />
          <UiUx />
          <Admin />
          <Vpd />
        </div>

      </div>
    </div>
  );
};


export default Team;