import React from "react";
import { Title, Quote, Mem, Container } from "./misc";


/*
Mem props schema:

props: {
  img: Image url of the Person,
  name: Name of the Person,
  desi: Designation of the Person,
  position: {
    x: Translate X for face
    y: Translate Y for face
  },
  fall: Fall direction for the person,
}

*/


const Lead = () => {
  return (
    <div className="w-full flex flex-col gap-24" id="lead">
      <Title
        title={"Leadership"}
        classes=""
      />
      
      <div className="w-full flex justify-end">
        <Container>
          <Mem
            img="/team/ritul.png"
            name="Ritul Satish"
            desi="Chief Experience Officer"
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
          <Mem
            img="/team/swayam.png"
            name="Swayam Saraogi"
            desi="Chief Design Officer"
            fall="left"
            position={{
              top: 0,
              left: 40,
              right: "auto",
              bottom: "auto",
              width: 36,
              height: 56
            }}
          />
          <Mem
            img="/team/ritul.png"
            name="Spatikkaa Veddmurthy"
            desi="Chief Operations Officer"
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
          <Quote
            author={"Paul Caponigro"}
            quote={"Watching design evolve inspires us to dream big. Our commitment to realising the dream drives us to lead."}
          />
          <Mem
            img="/team/aarav.png"
            name="Aarav Varshney"
            desi="Chief Technological Officer"
            fall="left"
            position={{
              top: 0,
              left: 32,
              right: "auto",
              bottom: "auto",
              width: 32,
              height: 52
            }}
          />
          <Mem
            img="/team/bahana.png"
            name="Bahana Saikia"
            desi="Chief Inovation Officer"
            fall="down"
            position={{
              top: 5,
              left: "auto",
              right: 0,
              bottom: "auto",
              width: 56,
              height: 28
            }}
          />
        </Container>
      </div>
      
    </div>
  );
};


export default Lead;

// top: 9,
//   left: 0,
//     right: "auto",
//       bottom: "auto",
//         width: 48,
//           height: 20
