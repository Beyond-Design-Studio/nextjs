import React from "react"


const Nav = ({toggleNav}) => {

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


export default Nav