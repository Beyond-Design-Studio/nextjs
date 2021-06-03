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