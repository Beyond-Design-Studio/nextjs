import React from "react";

import styles from "../../styles/anim.module.css";


const Landing = () => {

  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-center flex-shrink-0" style={{height: "90%"}}>
        <div className="flex justify-evenly items-center w-full ">
          <div>
            <img src="/logo.png" height="300" width="261" alt="Beyond Logo" />
          </div>

          <h1 className="font-prompt text-7xl text-font-color leading-relaxed">
            Design the future. <br /> Work with us now
          </h1>
        </div>
      </div>

      <div className="w-full flex justify-center">
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