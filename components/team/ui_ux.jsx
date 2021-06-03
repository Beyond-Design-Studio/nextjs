import React from "react";
import { Title, Quote, Mem, Container } from "./misc";


const UiUx = () => {
  return (
    <div className="w-full flex flex-col gap-24" id="uiux">
      <Title
        title={"UI/UX Design"}
        classes=""
      />

      <div className="w-full flex justify-end">
        <Container>
          <Quote
            author={"Paul Caponigro"}
            quote={"Every single design decision we make is a product of discussion, deliberation and design thinking."}
          />
          <Mem
            img="/team/stuti.png"
            name="Stuti Khandelwal"
            desi="UX Designer Lead"
            fall="down"
            position={{
              top: 24,
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
        </Container>
      </div>

    </div>
  );
};


export default UiUx;