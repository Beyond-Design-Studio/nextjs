import React from "react";
import styles from "../../styles/our.module.css"


const Our = ({second, content}) => {
  return (
    <div className="w-full h-screen flex-shrink-0 block">
      <div className="flex h-full items-center justify-center font-prompt">
        <div className={`${styles.container} flex flex-col pl-96`}>
          <div className={`${styles.design} text-accent-color font-semibold text-2xl transform translate-x-96 pb-4`}>
            <p>DESIGN</p>
            <p>THE</p>
            <p>FUTURE</p>
          </div>

          <div className="flex">
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
            <div className={`${styles["content"]} font-prompt text-font-color font-light text-2xl`}>{content}</div>
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

export default Our;