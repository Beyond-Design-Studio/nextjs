import React from "react";


const Footer = ({ moveSection }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-end">
      
      <div className="self-end p-8">
        <svg onClick={() => {moveSection; console.log("as")}} className="text-font-color" width="70" height="70" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="51.5" cy="51.5" r="49" strokeWidth="5" className="stroke-current" />
          <path d="M65 60 L50 44 L36 60" className="stroke-current" strokeWidth="5.2" />
        </svg>
      </div>

      <div style={{ backgroundColor: "#E6E6E6"}} className="py-8 px-8 pr-10 w-full h-3/5 flex z-10">
        <div className="font-prompt font-light flex flex-col justify-around flex-shrink-0 w-1/2 border-black border-r-2">
          <h2 className="text-5xl text-accent-color">Let's Talk</h2>
          
          <div className="text-4xl">
            <p>beyonddesignstudio@gmail.com</p>
            <p className="text-3xl">8217393998, 9176645022</p>
          </div>

          <p className="text-4xl">
            Home <br />
            What We Do <br />
            Work <br />
            Our Team
          </p>
        </div>

        <div className="flex flex-col items-end justify-around flex-shrink-0 w-1/2">
          <img src="/logo.png" height="125" width="143" alt="Beyond Logo" />
          
          <p className="text-3xl text-right font-prompt font-light pt-4">
            Virugambakkam <br />
            Chennai- 600092
          </p>

          <div className="flex gap-4">
            {/* Behance */}
            <svg width="50" height="50" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="68" height="68" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0" transform="scale(0.0147059)" />
                </pattern>
                <image id="image0" width="68" height="68" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAAXNSR0IArs4c6QAABCVJREFUeAHtWOFV20AMDn39X3eCeAPMBL0R2CBmAtiAdALSCTAbwAR4A7IBZoKmE9Dvoz6eI3S27ARc4tN73ztLJ+mkL2f7nKNZt2RwWQAc0xoYPo1UqJRYAzf1iKG/OIQ8AM8HBvbkALMk8LwGDo0I2Q97ZK+tQodD3BWSDK+z1yApUyOjkxRuIe80tZG9b4mDNjUSZL/k4FWm9NyQRHidHMyOgAx4UWiYuJx8AQH5xElotn9KQrhDovxjwJGQeWTjlYE5nyF8qESpGeAOidJgIBLSIIOXkZBIiGBAqHGHREIEA0KNOyQSIhgQ6tAdwgPdEHxH3BlwB/wB/jsZelJl3K7Cf+hWwKJHop9G3xx+gz9JeHTvC2NdJreix/qmhHAqe+Tc6n3oLWMtzOJ3YXH6KJ993jL8G+EqUPgG9gLgs0OTEsYf2sQYtq0tgwIsulanM8TymaFJAaNl3Xf3+apV9462BXJrt0jVc02+oUpgXcclGB1wXOs7DUNY1xZ0MFpyabG3xlgS4LQEtS3FuAQ2gKUWzWdQINZ7Iw4WbYGmjY1r8ghj00+7XmqBAVsKO8nT8nTZhgUphbiOAirMp4AUB0Nbkfy1Mxlk0BP49CZln2+ZFAXkgBQ2VAIsTkoGwz2QyImGfobroqH7y3NcnAKMLYFfQAU0JYWyBr41jV3Xbb9OaK4rp2U+h1Mov7ezGSkk4AHwPn78DVsKSFnB4H0sYy9nn1AuOlQ/ReCmpeALJXFbg4Xin7Xk9/00x1EJYf0pECKFzUjhTmg2IK8TGdDhvxW/z2eIw8L3SjE0VTUKjDeAFAeDjOVZQ2uOvm2yxuRGONB2LGxBdYsheFl0LZkzxq60YNgqEV9C35eUSGTp63mMj7tFoEsWPbp89NGdDSeBrquAXZovpcGgzw0+Ly5jEGKtLXTPL60JhviNccvwAKWJ3DnUM8XxTrHt1WR62GDFpp9WgBM+TX9er4ElEJISEzKmUJyd4teMOxUxJLU533Xdy9knE2vurKaBonnmSJTsK8V/A1uu+Baw+botYy9nn1BZdyfTfUvR14HMKewOWNajRhznfc3WsXcAE+9L2MQD0FVsPmBB5uYO68ot53sH7IOQFIVe9iz4Cv5WyeD4CMhmO/WhR/eltTLhl0J3AMchUiFoCfBNswGkkIhzIJcTVn0oIdb87+lXiuQkIxG23upnJqR3s5aAMQ5mlrpG84mECOojIZEQwYBQ4w6JhAgGhBp3iELIk7BNWX3iDqmmzIDovSIha2Gcslry6M5vAH6CR5nNTjwJ3CWdn8YH7lN6Mjg6YOqEkIMtKaBNlRT2/kb4X8IUbx32zN5VmRoprWR4hkhKARz67cMegzsDc2/EwUIGD42YEj05QBWeQ7okg0MOcEyBOfCZhJ8mFVACtwB/5KD8BVIW1ZxFtaW9AAAAAElFTkSuQmCC" />
              </defs>
            </svg>

            {/* Instagram */}
            <img width="50" height="50" src="/icons8-instagram.svg" alt="Instagram Logo" />

            {/* Linkedin */}
            <img width="50" height="50" src="/icons8-linkedin.svg" alt="Instagram Logo" />
            
          </div>
        </div>
      </div>
    </div>
  )
} 


export default Footer;