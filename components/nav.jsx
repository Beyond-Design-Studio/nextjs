import React, {useState} from "react";
import styles from "../styles/anim.module.css";


const NavButton = ({}) => {

  const [nav, toggleNav] = useState(false);

  return (
    <div>
      <button className="text-secondary-color" onClick={() => toggleNav(true)}>
        <svg className={`fill-current ${styles.ham}`} width="50" height="15" viewBox="0 0 50 15" xmlns="http://www.w3.org/2000/svg">
          <rect className={styles.lineone} width="50" height="4" />
          <rect className={styles.linetwo} width="25" height="4" x="25" y="11" />
        </svg>
      </button>

      {nav && <Nav toggleNav={toggleNav} />}
    </div>
  )
}


const Nav = ({nav, toggleNav}) => {

  return (
    <div className="bg-primary-color w-full h-screen absolute top-0">
      <div className="w-full flex justify-end">
        <button onClick={() => {toggleNav(false)}}>click</button>
      </div>
      <ul className="flex flex-col items-center justify-center h-full">
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </div>
  )

}


export default NavButton