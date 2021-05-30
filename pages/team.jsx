import React from "react";

import {Sidenav} from "../components/team/misc";
import Lead from "../components/team/lead";

const Team = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex h-full">
        
        <Sidenav />

        <div className="ml-80 mt-24 w-full">
          <Lead />
        </div>

      </div>
    </div>
  );
};


export default Team;