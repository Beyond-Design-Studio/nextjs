import React from "react";


const Sidenav = () => {
  return (
    <div className={
      `p-10 fixed flex flex-col justify-end items-start gap-6 
          text-font-color font-prompt text-sm w-80 h-screen`
    }
    >

      <div>Leadership</div>
      <div>Development</div>
      <div>UI/UX Design</div>
      <div>Administrative</div>
      <div>Visual and Product Design</div>
    </div>
  );
};


export default Sidenav