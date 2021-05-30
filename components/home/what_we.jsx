import React from "react";
import Link from "next/link";

import styles from "../../styles/what.module.css"


const WhatWeDo = ({ content }) => {
  return (
    <div className="w-full h-screen flex-shrink-0 block">
      <div className="flex h-full items-center justify-center font-prompt">
        <div className={`${styles.container} flex flex-col pl-80`}>
          <div className={`${styles.design} text-accent-color font-semibold text-2xl transform translate-x-96 pb-4`}>
            <p>DESIGN</p>
            <p>THE</p>
            <p>FUTURE</p>
          </div>

          <div className="flex justify-center">
            <div className={`flex flex-col text-font-color text-7xl font-semibold`}>
              <div className={`${styles["title-1"]} flex items-center gap-6`}>
                <div className="bg-accent-color h-2 w-24"></div>
                <p>What</p>
              </div>

              <p className={`${styles["title-2"]}`}>we</p>

              <div className={`flex items-end gap-6`}>
                <p className={`${styles["title-3"]}`}>do</p>
                <div className={`${styles["white-line"]} bg-font-color h-2 w-52 mb-4`}></div>
              </div>
            </div>
            <div className={`${styles["content"]} flex flex-col font-prompt text-font-color font-light text-2xl`}>
              {content}
              <Link href="/">
                <a className={`flex self-center items-center ${styles["button"]}`}>
                  <svg width="45" height="45" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.5371 5.37401L28.9208 7.99031L45.8355 24.905L1.84462 24.3185L1.89447 28.0573L45.8854 28.6438L29.4158 45.1134L32.1028 47.8004L53.0331 26.8701L31.5371 5.37401Z" fill="white" />
                  </svg>
                  <p>Services</p>
                </a>
              </Link>
            </div>
          </div>

          <div className={`${styles.beyond} text-font-color font-semibold text-2xl`}>
            <p>BEYOND</p>
            <p>YOUR</p>
            <p>IMAGINATION</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default WhatWeDo