import React from "react";


const Clientele = ({clients}) => {
  return (
    <div className="w-full h-screen flex-shrink-0 block">
      <div className="flex flex-col gap-12 h-full items-center font-prompt text-font-color justify-center">
        <h1 className="text-5xl sm:text-7xl font-light sm:font-semibold">Our Clientele</h1>
        <div className="w-3/4 flex flex-wrap items-center gap-16 justify-around">
          {
            clients.map((client) => <div key={client.key}>
              <img 
              className="h-16 w-auto lg:h-auto lg:w-auto"
              src={client.img} alt={client.img} />
            </div>)
          }
        </div>
      </div>
    </div>
  );
}


export default Clientele;