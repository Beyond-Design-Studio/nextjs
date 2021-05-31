import React from "react";

import {Sidenav} from "../components/team/misc";
import Lead from "../components/team/lead";
import Dev from "../components/team/dev";
import Admin from "../components/team/admin";
import UiUx from "../components/team/ui_ux";
import Vpd from "../components/team/vpd";

const Team = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex h-full">
        
        <Sidenav />

        <div className="ml-64 mt-24 w-full flex flex-col gap-32">
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