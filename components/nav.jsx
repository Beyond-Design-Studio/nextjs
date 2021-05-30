import React, { useState } from "react";

import styles from "../styles/anim.module.css";
import miscstyles from "../styles/misc.module.css";


const NavButton = ({ classes }) => {

  const [nav, toggleNav] = useState(false);

  return (
    <>
      <div className={`${classes}`}>
        <button className="text-accent-color" onClick={() => toggleNav(true)}>
          <svg className={`fill-current ${styles.ham}`} width="50" height="15" viewBox="0 0 50 15" xmlns="http://www.w3.org/2000/svg">
            <rect className={styles.lineone} width="50" height="4" />
            <rect className={styles.linetwo} width="25" height="4" x="25" y="11" />
          </svg>
        </button>

      </div>
      {/* {nav && } */}
      <Nav nav={nav} toggleNav={toggleNav} />
    </>
  )
}


const Line = ({ number }) => {
  return (
    <div className="text-sm font-prompt font-semibold text-accent-color flex items-center gap-3">
      <div className="flex h-0.5 w-full bg-accent-color" />
      <div>{number}</div>
      <div className="flex h-0.5 w-full bg-accent-color" />
    </div>
  )
}


const Nav = ({ nav, toggleNav }) => {

  return (
    <div
      className={`transition ease-in duration-300 transform
        ${nav ? "translate-x-0" : "translate-x-full"}
        bg-primary-color w-full h-full fixed top-0
        flex flex-col z-10
      `}
    >
      <div className="w-full flex justify-end pt-16 pb-2 pr-20">
        <button className="text-accent-color" onClick={() => { toggleNav(false) }}>
          <svg className="fill-current" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 28.2844L28.2843 0.000153065L31.1127 2.82858L2.82843 31.1129L0 28.2844Z" />
            <path d="M2.8291 0L31.1134 28.2843L28.2849 31.1127L0.000674486 2.82843L2.8291 0Z" />
          </svg>

        </button>
      </div>

      <ul className="text-font-color font-prompt text-6xl font-semibold flex flex-col items-center justify-center h-full">

        <div className="pb-7">
          <li 
            className={`mb-7 px-28 ${miscstyles.text}
              transform hover:scale-105 hover:translate-y-2 transition-all duration-500
            `}
          >Home</li>
          <Line number={"01"} />
        </div>

        <div className="pb-7">
          <li 
            className={`mb-7 px-52 ${miscstyles.text}
              transform hover:scale-105 hover:translate-y-2 transition-all duration-500
            `}
          >About</li>
          <Line number={"02"} />
        </div>

        <div className="pb-7">
          <li 
            className={`mb-7 px-52 ${miscstyles.text}
              transform hover:scale-105 hover:translate-y-2 transition-all duration-500
            `}>Gallery</li>
          <Line number={"03"} />
        </div>

        <div className="pb-7">
          <li
            className={`mb-7 px-28 ${miscstyles.text}
              transform hover:scale-105 hover:translate-y-2 transition-all duration-500
            `}
          >Contact</li>
          <Line number={"04"} />
        </div>
      </ul>
    </div>
  )

}


export default NavButton