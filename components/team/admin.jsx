import React from "react";
import { Title, Quote, Mem, Container } from "./misc";


const Admin = () => {
  return (
    <div className="w-full flex flex-col gap-24" id="admin">
      <Title
        title={"Administrative"}
        classes=""
      />

      <div className="w-full flex justify-end">
        <Container>
          <Mem
            img="/team/rochan.png"
            name="Rochan Mohapatra"
            desi="Head of Operations and Logistics"
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
            quote={"Either you run the day or the day runs by you. We make sure we’re faster."}
          />
          
          <Mem
            img="/team/arshia.png"
            name="Arisha Sood"
            desi="Finance Executive"
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
            name="Harsha Mini"
            desi="Head of Outreach"
            fall="right"
            position={{
              top: 0,
              left: "auto",
              right: 24,
              bottom: "auto",
              width: 32,
              height: 60
            }}
          />
          
          <Mem
            img="/team/kavya.png"
            name="Kavya Satish"
            desi="Social Media Marketer"
            fall="down"
            position={{
              top: 9,
              left: 0,
              right: "auto",
              bottom: "auto",
              width: 56,
              height: 44
            }}
          />

          <Mem
            img="/team/aditya.png"
            name="Aditya Phalod"
            desi="Social Media Marketer"
            fall="down"
            position={{
              top: 9,
              left: 0,
              right: "auto",
              bottom: "auto",
              width: 56,
              height: 44
            }}
          />

          <Quote
            author={"Paul Caponigro"}
            quote={"When you have creative minds, you see innovation anywhere."}
          />
          <Mem
            img="/team/oishiki.png"
            name="Oishiki Ganguly"
            desi="Social Media Marketer"
            fall="down"
            position={{
              top: 5,
              left: "auto",
              right: 0,
              bottom: "auto",
              width: 52,
              height: 32
            }}
          />

          <Mem
            img="/team/radhika.png"
            name="Radhika Vichitra"
            desi="Social Media Marketer"
            fall="left"
            position={{
              
              top: 0,
              left: 24,
              right: "auto",
              bottom: "auto",
              width: 32,
              height: 40
            }}
          />
        </Container>
      </div>

    </div>
  );
};


export default Admin;