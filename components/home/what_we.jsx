import React from "react";
import styles from "../../styles/what.module.css"


const WhatWeDo = ({}) => {
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
            <div className={`${styles["content"]} font-prompt text-font-color font-light text-2xl`}>We aim to create designs that speak for themselves. We create, evaluate and recreate– we make no compromises to achieve that. Ultimately, our aim is to elevate brands by providing a unique footing for them in the digital world. We like to keep it simple, yet significant.</div>
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