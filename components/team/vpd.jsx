import React from "react";
import { Title, Quote, Mem } from "./misc";


const Vpd = () => {
  return (
    <div className="w-full flex flex-col gap-24" id="vpd">
      <Title
        title={"Visual and Product Design"}
        classes=""
      />

      <div className="w-full flex justify-end">
        <div className="w-10/12 pr-8 mr-16 grid grid-cols-3 gap-x-10 gap-y-12">
          <Mem
            img="/team/tanisha.png"
            name="Tanisha Singh"
            desi="Visual Designer"
            fall="down"
            position={{
              top: 5,
              left: 0,
              right: "auto",
              bottom: "auto",
              width: 64,
              height: 40
            }}
          />
          <Mem
            img="/team/ritul.png"
            name="Vanshika"
            desi="Digital Illustrator"
            fall="down"
            position={{
              top: 9,
              left: 0,
              right: "auto",
              bottom: "auto",
              width: 48,
              height: 28
            }}
          />
          <Mem
            img="/team/biratal.png"
            name="Biratal Wagle"
            desi="Visual Designer"
            fall="down"
            position={{
              top: 9,
              left: "auto",
              right: 0,
              bottom: "auto",
              width: 56,
              height: 36
            }}
          />

          <div style={{
            gridColumn: "1 / 3"
          }}>
            <Quote
              author={"Paul Caponigro"}
              quote={"It’s one thing to get an idea of how a person looks, another thing is to make a portrait of who he is."}
            />
          </div>

          <Mem
            img="/team/bear.png"
            name="Join Us"
            desi="All Positions Open"
            fall="down"
            position={{
              top: 9,
              left: "auto",
              right: 0,
              bottom: "auto",
              width: 56,
              height: 32
            }}
          />
        </div>
      </div>

    </div>
  );
};


export default Vpd;