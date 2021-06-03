import React from "react";
import { Title, Quote, Mem, Container } from "./misc";


const Dev = () => {
  return (
    <div className="w-full flex flex-col gap-24" id="dev">
      <Title
        title={"Development"}
        classes=""
      />

      <div className="w-full flex justify-end">
        <Container>
          <Mem
            img="/team/arg.jpg"
            name="Argha Chakrabarty"
            desi="Web Developer"
            fall="right"
            position={{
              top: 0,
              left: "auto",
              right: 16,
              bottom: "auto",
              width: 40,
              height: 52
            }}
          />
          <Quote
            author={"Dorthea Lange"}
            quote={"Linux is only free, if your time has no value."}
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
            quote={"Without requirements or design, programming is the art of adding bugs to an empty text file."}
          />
        </Container>
      </div>

    </div>
  );
};


export default Dev;