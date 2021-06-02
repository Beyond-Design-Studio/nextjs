import React from "react";


const Create = () => {
  return (
    <div className="w-full h-screen flex-shrink-0 block">
      <div className="flex h-full flex-col items-center justify-center gap-16">
        <h1 className="text-5xl sm:text-7xl font-prompt font text-font-color text-center lg:text-left leading-normal font-light sm:font-semibold">Let's Create Together!</h1>
        <button className="p-2 sm:p-4 px-7 sm:px-10 bg-accent-color font-medium text-xl font-prompt text-font-color rounded-xl sm:rounded-2xl filter drop-shadow-xl">Talk to Us</button>
      </div>
    </div>
  );
}

export default Create;