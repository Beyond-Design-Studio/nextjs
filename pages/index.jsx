import React from "react";
import Head from "next/head";

import Landing from "../components/landing";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* SEO */}
      <Head>
        <title>Beyond Design Studio</title>
      </Head>

      <Landing />
      
    </div>
  );
}
