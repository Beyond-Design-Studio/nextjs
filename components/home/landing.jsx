import React from "react";

import styles from "../../styles/anim.module.css";


const Landing = ({ moveSectionDown }) => {
  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-center flex-shrink-0" style={{height: "90%"}}>
        <div className="pt-24 sm:pt-36 gap-16 flex flex-wrap justify-evenly items-center w-full ">
          <div>
            <img className="h-48 w-44 sm:w-52 sm:h-56 xl:w-72 xl:h-80" src="/logo.png" alt="Beyond Logo" />
          </div>

          <h1 className="text-center lg:text-left font-prompt text-3xl sm:text-5xl md:text-6xl xl:text-7xl text-font-color sm:leading-relaxed lg:leading-relaxed xl:leading-relaxed">
            Design the future. <br /> Create with us now
          </h1>
        </div>
      </div>

      <div className="w-full flex justify-center" onClick={moveSectionDown}>
        <svg className={`${styles.arrow} self-center justify-self-center`} width="66" height="48" viewBox="0 0 66 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.hiddenPath} d="M2 2 L33 26 L64 2" stroke="#F3F3F3" strokeWidth="4" />
          <path className={styles.upperPath} d="M2 2 L33 26 L64 2" stroke="#F3F3F3" strokeWidth="4" />
          <path className={styles.lowerPath} d="M2 20 L33 44 L64 20" stroke="#F3F3F3" strokeWidth="4" />
        </svg>
      </div>
    </div>
  )
}

export default Landing;