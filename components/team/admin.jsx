import React from "react";
import { Title, Quote, Mem } from "./misc";


const Admin = () => {
  return (
    <div className="w-full flex flex-col gap-24" id="admin">
      <Title
        title={"Administrative"}
        classes=""
      />

      <div className="w-full flex justify-end">
        <div className="w-10/12 pr-8 mr-16 grid grid-cols-3 gap-x-10 gap-y-12">
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
          
          <Quote
            author={"Paul Caponigro"}
            quote={"It’s one thing to get an idea of how a person looks, another thing is to make a portrait of who he is."}
          />
          
          <Mem
            img="/team/arshia.png"
            name="Spatikkaa Veddmurthy"
            desi="Chief Operations Officer"
            fall="right"
            position={{
              top: "auto",
              left: "auto",
              right: 24,
              bottom: 0,
              width: 32,
              height: 80
            }}
          />
          
          <Mem
            img="/team/harsha.png"
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
            img="/team/kavya.png"
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

          <Quote
            author={"Paul Caponigro"}
            quote={"It’s one thing to get an idea of how a person looks, another thing is to make a portrait of who he is."}
          />

          <Quote
            author={"Paul Caponigro"}
            quote={"It’s one thing to get an idea of how a person looks, another thing is to make a portrait of who he is."}
          />
          <Mem
            img="/team/oishiki.png"
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
            img="/team/radhika.png"
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
        </div>
      </div>

    </div>
  );
};


export default Admin;