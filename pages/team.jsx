import React from "react";
import Head from "next/head";

import { Sidenav } from "../components/team/misc";
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
        <meta name="description"
          content=
          "We create, evaluate and recreate– we make no compromises. We are a team of young, dynamic and aspiring designers who give our 100% to every project we take up." />
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