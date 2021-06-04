import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Footer from "../components/footer";
import NavButton from "../components/nav";
import { analytics } from '../utils/firebase';
import "../styles/override.css"
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  const routers = useRouter();
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const logEvent = (url) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent('screen_view');
      };

      routers.events.on('routeChangeComplete', logEvent);
      //For First Page
      logEvent(window.location.pathname);

      //Remvove Event Listener after un-mount
      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
    }
  }, [])
  return (
    <div id="page" className="bg-bg-img bg-no-repeat bg-fixed">

      <NavButton classes="p-8 sm:p-20 flex fixed justify-end right-0" />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp
