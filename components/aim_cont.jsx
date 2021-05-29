import React from "react"
import styles from "../styles/anim_cont.module.css"

const AnimCont = () => {
  return (
    <div className="flex h-full items-center justify-center font-prompt">
      <div className={ `${styles.container} flex flex-col` }>
        <div className="text-accent-color font-semibold text-2xl transform translate-x-48">
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
          <div className={`${styles["content"]}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur soluta cupiditate voluptatem in est, veniam delectus nostrum quisquam illum alias, saepe harum animi nisi rem pariatur ab voluptatum earum!</div>
        </div>

        <div className="text-font-color font-semibold text-2xl">
          <p>BEYOND</p>
          <p>YOUR</p>
          <p>IMAGINATION</p>
        </div>
      </div>
    </div>
  );
}


export default AnimCont;