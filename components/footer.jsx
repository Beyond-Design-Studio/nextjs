import React from "react";
import Link from "next/link";


const Footer = ({ moveSectionUp }) => {

  return (
    <div className="w-full h-screen flex flex-col justify-end">

      <div className="self-end p-8">
        <svg onClick={moveSectionUp} className="text-font-color" width="70" height="70" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="51.5" cy="51.5" r="49" strokeWidth="5" className="stroke-current" />
          <path d="M65 60 L50 44 L36 60" className="stroke-current" strokeWidth="5.2" />
        </svg>
      </div>



      <div style={{ backgroundColor: "#E6E6E6" }} className="py-8 px-2 sm:px-8 sm:pr-10 w-full h-3/5 flex flex-col justify-between z-10">
        <div className="block sm:hidden text-center">
          <h2 className="text-3xl lg:text-5xl text-accent-color">Let's Talk</h2>

          <div className="text-xl sm:text-4xl">
            <p>beyonddesignstudio@gmail.com</p>
            <p className="text-lg sm:text-3xl">8217393998, 9176645022</p>
          </div>
        </div>

        <div className="flex sm:h-full">
          <div className="font-prompt font-light flex flex-col justify-end sm:justify-between flex-shrink-0 w-1/2 border-black border-r-2">

            <div className="hidden sm:block">
              <h2 className="text-4xl lg:text-5xl text-accent-color">Let's Talk</h2>

              <div className="text-xl lg:text-3xl xl:text-4xl">
                <p>beyonddesignstudio@gmail.com</p>
                <p className="text-base lg:text-3xl">8217393998, 9176645022</p>
              </div>
            </div>

            <p className="flex flex-col gap-2 sm:gap-0 text-2xl lg:text-4xl">
              <Link href="/">
                <a>Home</a>              
              </Link>
              <Link href="/services">
                <a>What We Do</a>              
              </Link>
              <Link href="/work">
                <a>Work</a>              
              </Link>
              <Link href="/team">
                <a>Our Team</a>              
              </Link>
            </p>
          </div>

          <div className="flex flex-col items-end justify-around flex-shrink-0 w-1/2">
            <img className="hidden sm:block" src="/logo.png" height="125" width="143" alt="Beyond Logo" />
            <img className="block sm:hidden" src="/logo.png" height="100" width="87" alt="Beyond Logo" />

            <p className="text-xl sm:text-3xl text-right font-prompt font-light pt-4">
              Virugambakkam <br />
              Chennai- 600092
            </p>

            <div className="hidden sm:flex gap-2 sm:gap-4">
              {/* Behance */}
              <img width="50" height="50" src="/icons8-behance.svg" alt="Behance Logo" />

              {/* Instagram */}
              <img width="50" height="50" src="/icons8-instagram.svg" alt="Instagram Logo" />

              {/* Linkedin */}
              <img width="50" height="50" src="/icons8-linkedin.svg" alt="Instagram Logo" />

            </div>

            <div className="flex sm:hidden gap-2 sm:gap-4">
              {/* Behance */}
              <img width="30" height="30" src="/icons8-behance.svg" alt="Behance Logo" />

              {/* Instagram */}
              <img width="30" height="30" src="/icons8-instagram.svg" alt="Instagram Logo" />

              {/* Linkedin */}
              <img width="30" height="30" src="/icons8-linkedin.svg" alt="Instagram Logo" />

            </div>

          </div>
        </div>
      </div>
    </div >
  )
}


export default Footer;