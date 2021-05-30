import React from "react";


const Clientele = ({clients}) => {
  return (
    <div className="w-full h-screen flex-shrink-0 block">
      <div className="flex flex-col gap-4 h-full items-center font-prompt text-font-color justify-center">
        <h1 className="text-7xl font-semibold">Our Clientele</h1>
        <div className="w-3/4 flex flex-wrap items-center gap-16 justify-around">
          {
            clients.map((client) => <div key={client.key}>
              <img src={client.img} alt={client.img} />
            </div>)
          }
        </div>
      </div>
    </div>
  );
}


export default Clientele;