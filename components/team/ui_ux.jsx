import React from "react";
import { Title, Quote, Mem } from "./misc";


const UiUx = () => {
  return (
    <div className="w-full flex flex-col gap-24" id="uiux">
      <Title
        title={"Leadership"}
        classes=""
      />

      <div className="w-full flex justify-end">
        <div className="w-10/12 pr-8 mr-16 grid grid-cols-3 gap-x-10 gap-y-12">
          <Quote
            author={"Paul Caponigro"}
            quote={"It’s one thing to get an idea of how a person looks, another thing is to make a portrait of who he is."}
          />
          <Mem
            img="/team/stuti.png"
            name="Stuti Khandelwal"
            desi="UX Designer Lead"
            fall="down"
            position={{
              top: 20,
              left: 0,
              right: "auto",
              bottom: "auto",
              width: 64,
              height: 32
            }}
          />
          <Mem
            img="/team/samarth.png"
            name="Samarth Jain"
            desi="UX Engineer"
            fall="right"
            position={{
              top: 0,
              left: "auto",
              right: 24,
              bottom: "auto",
              width: 32,
              height: 44
            }}
          />
        </div>
      </div>

    </div>
  );
};


export default UiUx;