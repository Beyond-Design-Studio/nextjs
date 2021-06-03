import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from 'next/head'

import HomeData from '../constants/homedata'

/*
  * All the component imports are stored in /constants/HomeData.jsx
  * Using all those components to initialize fullpages 
  * then mapping those pages inside the fullpage wrapper
*/

const App = () => {
  const [fullpages, setFullpage] = useState(HomeData);

  return (
    <div className="flex flex-col">
      {/* SEO */}
      <Head>
        <title>Beyond Design Studio</title>
        <meta name="description" content="Design the future. Create with us now.
Beyond Design Studio is a design and development startup taking up projects that impact the world. With our creative abilities to deliver the best results, our clients range from educational institutions to marketing firms to agro-businesses to community-based products. The design elements of our projects are in sync to ensure the conversation between the user and the product is smooth and memorable. We offer a range of services including app and web development, UI/UX design, visual and product design having a space for all design specialties - 3D, motion, graphic, User interface, user experience. 
Beyond Design Studio aims to create designs that speak for themselves. We create, evaluate and recreate– we make no compromises to achieve that. Ultimately, our aim is to elevate brands by providing a unique footing for them in the digital world. We like to keep it simple, yet significant.
" />
      </Head>

      <ReactFullpage
        navigation
        licenseKey={" B399F471-9FF141B5-BD62B82F-DA63B84D "}
        dragAndMove={"fingersonly"}
        parallax={true}
        render={comp =>
          console.log("render prop change") || (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text, component }) => (
                <div key={text} className="section">
                  {component}
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )
        }
      />
    </div>
  );
}

export default App;