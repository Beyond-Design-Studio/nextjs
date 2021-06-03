import React, { useState } from "react";
import Link from "next/link";

import styles from "../styles/anim.module.css";
import miscstyles from "../styles/misc.module.css";


const NavButton = ({ classes }) => {

  const [nav, toggleNav] = useState(false);

  return (
    <>
      <div className={`${classes} z-20`}>
        <button className="text-accent-color" onClick={() => toggleNav(true)}>
          <svg className={`fill-current ${styles.ham}`} width="50" height="15" viewBox="0 0 50 15" xmlns="http://www.w3.org/2000/svg">
            <rect className={styles.lineone} width="50" height="4" />
            <rect className={styles.linetwo} width="25" height="4" x="25" y="11" />
          </svg>
        </button>

      </div>

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


const NavItem = ({name, number, type}) => {
  return (
    <>
      <li
        className={`mb-2 md:mb-7 px-${type === 52 ? 16 : 12} md:px-${type} ${miscstyles.text}
              transform hover:scale-105 hover:translate-y-2 transition-all duration-500
            `}
      >{name}</li>
      <Line number={number} />
    </>      
  );
}


const Nav = ({ nav, toggleNav }) => {

  return (
    <div
      className={`transition ease-in duration-300 transform
        ${nav ? "translate-x-0" : "translate-x-full"}
        bg-primary-color w-full h-full fixed top-0
        flex flex-col z-20
      `}
    >
      <div className="w-full flex justify-end pt-12 md:pt-16 pb-2 pr-12 md:pr-20">
        <button className="text-accent-color" onClick={() => { toggleNav(false) }}>
          <svg className="fill-current" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 28.2844L28.2843 0.000153065L31.1127 2.82858L2.82843 31.1129L0 28.2844Z" />
            <path d="M2.8291 0L31.1134 28.2843L28.2849 31.1127L0.000674486 2.82843L2.8291 0Z" />
          </svg>

        </button>
      </div>

      <ul className="text-font-color font-prompt text-4xl md:text-5xl lg:text-6xl font-semibold flex flex-col items-center justify-center h-full">


        <Link href="/">
          <a className="pb-7" onClick={() => { toggleNav(false) }}>
            <NavItem 
              name={"Home"}
              number={"01"}
              type={28}
            />
          </a>
        </Link>


        <Link href="/services">
          <a className="pb-7" onClick={() => {toggleNav(false)}}>
            <NavItem
              name={"What we do"}
              number={"02"}
              type={52}
            />
          </a>
        </Link>

        <Link href="/work">
          <a className="pb-7" onClick={() => {toggleNav(false)}}>
            <NavItem
              name={"Work"}
              number={"03"}
              type={52}
            />
          </a>
        </Link>

        <Link href="/services#Footer">
          <a className="pb-7" onClick={() => {toggleNav(false)}}>
            <NavItem
              name={"Contact"}
              number={"04"}
              type={28}
            />
          </a>
        </Link>
      </ul>
    </div>
  )

}


export default NavButton