import React from "react";
import styles from "../../styles/member.module.css"


const Sidenav = () => {
  return (
    <div className={
      `p-10 fixed flex flex-col justify-end items-start gap-6 
      text-font-color font-prompt text-base w-80 h-screen`
    }
    >

      <div className={`${styles.camera}`}>
        <a href="#lead">Leadership</a>
      </div>
      <div className={`${styles.camera}`}>
        <a href="#dev">Development</a>
      </div>
      <div className={`${styles.camera}`}>
        <a href="#uiux">UI/UX Design</a>
      </div>
      <div className={`${styles.camera}`}>
        <a href="#admin">Administrative</a>
      </div>
      <div className={`${styles.camera}`}>
        <a href="#vpd">Visual and Product Design</a>
      </div>
    </div>
  );
};


const Title = ({title, classes}) => {
  return (
    <div className={`${classes} flex gap-3 lg:gap-0 flex-col lg:flex-row items-start lg:items-center`}>
      <div className="hidden lg:block transform -translate-x-28 h-3 w-40 bg-accent-color"></div>
      <h1 className="font-prompt text-5xl lg:text-7xl text-font-color font-semibold">{title}</h1>
      <div className="block md:hidden h-1 w-full bg-accent-color"></div>
    </div>
  );
};


const Quote = ({quote}) => {
  return (
    <div className="flex flex-col w-full h-full">
      
      <div className="flex flex-col gap-4 text-accent-color">
        <svg className="fill-current self-end" width="25" height="18" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.136 17.792C17.0453 17.792 15.5307 17.0453 14.592 15.552C14.1653 14.912 13.824 14.1227 13.568 13.184C13.312 12.2453 13.184 11.264 13.184 10.24C13.184 8.02134 13.7387 6.016 14.848 4.224C16 2.432 17.6853 1.024 19.904 0L20.48 1.152C19.2427 1.664 18.1547 2.45333 17.216 3.52C16.32 4.58667 15.7867 5.67467 15.616 6.784C15.488 7.296 15.424 7.78667 15.424 8.256C15.424 8.68267 15.488 9.088 15.616 9.472C16.5547 8.448 17.792 7.936 19.328 7.936C20.8213 7.936 22.0373 8.384 22.976 9.28C23.9147 10.1333 24.384 11.328 24.384 12.864C24.384 14.3147 23.8933 15.5093 22.912 16.448C21.9307 17.344 20.672 17.792 19.136 17.792ZM5.952 17.792C3.86133 17.792 2.34667 17.0453 1.408 15.552C0.981333 14.912 0.64 14.1227 0.384 13.184C0.128 12.2453 0 11.264 0 10.24C0 8.02134 0.554667 6.016 1.664 4.224C2.816 2.432 4.50133 1.024 6.72 0L7.296 1.152C6.05867 1.664 4.97067 2.45333 4.032 3.52C3.136 4.58667 2.60267 5.67467 2.432 6.784C2.304 7.296 2.24 7.78667 2.24 8.256C2.24 8.68267 2.304 9.088 2.432 9.472C3.37067 8.448 4.608 7.936 6.144 7.936C7.63733 7.936 8.85333 8.384 9.792 9.28C10.7307 10.1333 11.2 11.328 11.2 12.864C11.2 14.3147 10.7093 15.5093 9.728 16.448C8.74667 17.344 7.488 17.792 5.952 17.792Z" />
        </svg>

        <div className="w-5/6 h-0.5 bg-current"></div>

        {/* <p className="text-xs font-prompt font-bold">{author}</p> */}
      </div>

      <div className="mt-16 text-font-color font-light font-prompt text-base lg:text-xl xl:text-3xl leading-normal lg:leading-7 xl:leading-10">
        <p>{quote}</p>
      </div>

    </div>
  )
}


const Container = ({children}) => {
  return (
    <div style={{
      gridTemplateRows: "repeat(auto-fit, minmax(0, 1fr))"
    }}
      className="w-full lg:w-10/12 pr-0 lg:pr-8 mr-0 lg:mr-16 grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
      {children}
    </div>
  );
};


/*
Mem props schema: 

props: {
  img: Image url of the Person,
  name: Name of the Person,
  desi: Designation of the Person,
  position: {
    top,
    right,
    bottom,
    left
  },
  fall: Fall direction for the person,
}

*/

const Mem = ({img, name, desi, position, fall}) => {

  // Keep w = 240 and h = 400

  var dir = ""
  var dim = ""
  
  switch (fall) {
    case ("down"):
      dir = "top-full";
      dim = "h-0"
      break;
    case ("left"):
      dim = "w-0";
      dir = "left-0";
      break;
    case ("right"):
      dim = "w-0";
      dir = "right-0";
      break
    default:
      dir = "";
  }

  var top = `top-${position.top}`
  var left = `left-${position.left}`
  var bottom = `bottom-${position.bottom}`
  var right = `right-${position.right}`
  var width = `w-${position.width}`
  var height = `h-${position.height}`

  return (
    <div className="group flex flex-col w-full h-full">
      <div className={`h-4/5 bg-transparent relative`}>
        <img src={img} alt={name} className="filter grayscale h-full w-full object-cover object-top"/>
        
        <div
          className={`hidden xl:block
            transition-all ease-out duration-700 group-hover:${dir} group-hover:${dim}
            absolute ${top} ${left} ${bottom} ${right} ${width} ${height}
            `}
          style={{
            background: "#EF0000",
            mixBlendMode: "overlay"
          }}
        >
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-between h-1/5 items-center text-font-color font-prompt font-light text-sm">
        <p className="transform transition-transform ease-out duration-300 origin-top-left group-hover:scale-125 font-normal md:font-light w-full md:w-1/4 text-left">{name}</p>
        <p className="transform transition-transform ease-out duration-300 origin-top-right group-hover:scale-125 w-full md:w-4/12 text-left md:text-right">{desi}</p>
      </div>
    </div>
  );
}


export {Sidenav, Title, Quote, Mem, Container};