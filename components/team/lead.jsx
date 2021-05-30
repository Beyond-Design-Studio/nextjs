import React from "react";
import { Title, Quote, Mem } from "./misc";


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
    <div className="w-full ">
      <Title title={"Leadership"} />
      <div style={{
        width: "240px",
        height: "400px"
      }}>
        <Quote
          author={"Musashi Miyamoto"}
          quote={"Leverage agile frameworksgh level overviews. Iterative approaches to corporate strategy camera."}
        />
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
            width: 48,
            height: 20
          }}
        />
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
