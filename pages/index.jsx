import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import NavButton from "../components/nav";
import styles from "../styles/anim.module.css";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Head>
        <title>Beyond Design Studio</title>
      </Head>
      
      <div className="p-20 pt-28 flex justify-end">
        <NavButton />
      </div>
      
      <div className="flex items-center h-1/2 justify-center">
        <div className="flex justify-evenly items-center w-full">
          <div><Image
            src="/logo.png"
            alt="Logo of Beyond Desing Studio"
            height={300}
            width={261}
            // layout="intrinsic"
            // objectFit="fixed"
            // sizes="300px"
          /></div>
          {/* <img src="/logo.png" alt="Logo of Beyond Desing Studio" /> */}
          <h1 className="font-prompt text-7xl text-font-color leading-relaxed">
            Design the future. <br /> Work with us now
          </h1>
        </div>
      </div>
      
      <div className="w-full h-full px-20 pt-28 flex">
        <svg className={ `${styles.arrow} self-center justify-self-center` } width="66" height="48" viewBox="0 0 66 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.hiddenPath} d="M2 2 L33 26 L64 2" stroke="#F3F3F3" strokeWidth="4" />
          <path className={styles.upperPath} d="M2 2 L33 26 L64 2" stroke="#F3F3F3" strokeWidth="4" />
          <path className={styles.lowerPath} d="M2 20 L33 44 L64 20" stroke="#F3F3F3" strokeWidth="4" />
        </svg>
      </div>
    </div>
  );
}
