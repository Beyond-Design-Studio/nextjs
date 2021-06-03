import React from "react";
import Link from "next/link";

import styles from "../../styles/our.module.css"


const Our = ({second, content, re, link}) => {


  return (
    <div className="w-full h-screen flex-shrink-0 block">
      <div className="flex h-full items-center justify-center font-prompt">
        <div className={`flex flex-col pl-0 xl:pl-96 pt-36 xl:pt-12`}>
          
          <div className={`${styles.container} flex flex-wrap xl:flex-nowrap justify-center`}>
            <div className={`flex flex-col text-font-color text-5xl md:text-6xl xl:text-7xl font-semibold`}>
              <div className={`${styles["title-1"]} flex items-center gap-6 transform -translate-x-9 translate-y-12 md:-translate-x-20 xl:-translate-x-0 xl:translate-y-0`}>
                <div className="bg-accent-color h-2 w-12 sm:w-24"></div>
                <p>Our</p>
              </div>

              <div className={`flex items-end gap-6`}>
                <p className={`${styles["title-3"]} transform translate-x-36 translate-y-12 xl:translate-x-64 xl:translate-y-0`}>{second}</p>
                <div className={`${styles["white-line"]} bg-font-color h-2 w-52 mb-4 transform translate-x-32 translate-y-14 xl:translate-x-64 xl:translate-y-0`}></div>
              </div>
            </div>
            <div className={`${styles["content"]} flex flex-col font-prompt gap-8 xl:gap-0 text-font-color font-light text-base sm:text-2xl`}>
              {content}
              <Link href={link}>
                <a className="self-center">
                  <div className={`hidden lg:flex self-center items-center ${styles["button"]}`}>
                    <svg width="45" height="45" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.5371 5.37401L28.9208 7.99031L45.8355 24.905L1.84462 24.3185L1.89447 28.0573L45.8854 28.6438L29.4158 45.1134L32.1028 47.8004L53.0331 26.8701L31.5371 5.37401Z" fill="white" />
                    </svg>
                    <p>{re}</p>
                  </div>

                  <div className={`flex lg:hidden gap-2 self-center items-center`}>
                    <svg width="30" height="30" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.5371 5.37401L28.9208 7.99031L45.8355 24.905L1.84462 24.3185L1.89447 28.0573L45.8854 28.6438L29.4158 45.1134L32.1028 47.8004L53.0331 26.8701L31.5371 5.37401Z" fill="white" />
                    </svg>
                    <p>{re}</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div className={`${styles.design} leading-4 sm:leading-7 font-robotoc text-accent-color font-semibold text-base md:text-xl xl:text-2xl pb-4`}>
            <p>DESIGN</p>
            <p>THE</p>
            <p>FUTURE</p>
          </div>

          <div className={`${styles.beyond} leading-4 sm:leading-7 font-robotoc text-font-color font-semibold text-base md:text-xl xl:text-2xl`}>
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