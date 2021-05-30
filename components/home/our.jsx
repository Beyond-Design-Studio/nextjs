import React from "react";
import Link from "next/link";

import styles from "../../styles/our.module.css"


const Our = ({second, content, re, link}) => {
  return (
    <div className="w-full h-screen flex-shrink-0 block">
      <div className="flex h-full items-center justify-center font-prompt">
        <div className={`flex flex-col pl-96`}>
          <div className={`${styles.design} leading-7 font-robotoc text-accent-color font-semibold text-2xl transform translate-x-96 pb-4`}>
            <p>DESIGN</p>
            <p>THE</p>
            <p>FUTURE</p>
          </div>

          <div className={`${styles.container} flex justify-center`}>
            <div className={`flex flex-col text-font-color text-7xl font-semibold`}>
              <div className={`${styles["title-1"]} flex items-center gap-6`}>
                <div className="bg-accent-color h-2 w-24"></div>
                <p>Our</p>
              </div>

              <div className={`flex items-end gap-6`}>
                <p className={`${styles["title-3"]}`}>{second}</p>
                <div className={`${styles["white-line"]} bg-font-color h-2 w-52 mb-4`}></div>
              </div>
            </div>
            <div className={`${styles["content"]} flex flex-col font-prompt text-font-color font-light text-2xl`}>
              {content}
              <Link href={link}>
                <a className="self-center">
                  <div className={`flex self-center items-center ${styles["button"]}`}>
                    <svg width="45" height="45" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.5371 5.37401L28.9208 7.99031L45.8355 24.905L1.84462 24.3185L1.89447 28.0573L45.8854 28.6438L29.4158 45.1134L32.1028 47.8004L53.0331 26.8701L31.5371 5.37401Z" fill="white" />
                    </svg>
                    <p>{re}</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div className={`${styles.beyond} leading-7 font-robotoc text-font-color font-semibold text-2xl`}>
            <p>BEYOND</p>
            <p>YOUR</p>
            <p>IMAGINATION</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Our;