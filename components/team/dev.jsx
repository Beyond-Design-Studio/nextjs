import React from "react";
import { Title, Quote, Mem } from "./misc";


const Dev = () => {
  return (
    <div className="w-full flex flex-col gap-24" id="dev">
      <Title
        title={"Development"}
        classes=""
      />

      <div className="w-full flex justify-end">
        <div className="w-10/12 pr-8 mr-16 grid grid-cols-3 gap-x-10 gap-y-12">
          <Mem
            img="/team/ritul.png"
            name="Argha Chakrabarty"
            desi="Web Developer"
            fall="down"
            position={{
              top: 9,
              left: 0,
              right: "auto",
              bottom: "auto",
              width: 64,
              height: 28
            }}
          />
          <Quote
            author={"Dorthea Lange"}
            quote={"The camera is a tool that teaches people to see without a camera."}
          />
          <Mem
            img="/team/alfred.png"
            name="Alfred Daimari"
            desi="Web Developer"
            fall="right"
            position={{
              top: 0,
              left: "auto",
              right: 24,
              bottom: "auto",
              width: 28,
              height: 44
            }}
          />
          <Mem
            img="/team/niranjan.png"
            name="Niranjan Rajesh"
            desi="Web Developer"
            fall="down"
            position={{
              top: 11,
              left: "auto",
              right: 0,
              bottom: "auto",
              width: 56,
              height: 36
            }}
          />
          <Mem
            img="/team/shuhaib.png"
            name="Shuhaib Ibrahim"
            desi="Web Devloper Intern"
            fall="right"
            position={{
              top: "auto",
              left: "auto",
              right: 24,
              bottom: 0,
              width: 36,
              height: 80
            }}
          />
          <Quote
            author={"Dorthea Lange"}
            quote={"The camera is a tool that teaches people to see without a camera."}
          />
        </div>
      </div>

    </div>
  );
};


export default Dev;