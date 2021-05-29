import React from "react";
import Head from "next/head";

import Landing from "../components/landing";
import WhatWeDo from "../components/what_we";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* SEO */}
      <Head>
        <title>Beyond Design Studio</title>
      </Head>

      <Landing />
      
      <WhatWeDo />

      <WhatWeDo />

      <WhatWeDo />

    </div>
  );
}
