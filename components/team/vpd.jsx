import React from "react";
import { Title, Quote, Mem, Container } from "./misc";


const Vpd = () => {
  return (
    <div className="w-full flex flex-col gap-24" id="vpd">
      <Title
        title={"Visual and Product Design"}
        classes=""
      />

      <div className="w-full flex justify-end">
        <Container>
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
          {/* <Mem
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
          /> */}
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

          <Quote
            author={"Paul Caponigro"}
            quote={"Creativity drives our work, Our passion fuels it."}
          />

          <div className="col-span-2">
            <Mem
              img="/team/bear.png"
              name="Join Us"
              desi="All Positions Open"
              fall="right"
              position={{
                top: 0,
                left: "auto",
                right: 64,
                bottom: "auto",
                width: 36,
                height: 40
              }}
            />
          </div>

        </Container>
      </div>

    </div>
  );
};


export default Vpd;