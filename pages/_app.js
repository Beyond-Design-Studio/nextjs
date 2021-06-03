import '../styles/globals.css'
import Footer from "../components/footer";
import NavButton from "../components/nav";
import "../styles/override.css"


function MyApp({ Component, pageProps }) {
  return (
    <div id="page" className="bg-bg-img bg-no-repeat bg-fixed">

      <NavButton classes="p-8 sm:p-20 flex fixed justify-end right-0" />
      
      <Component {...pageProps} />
      
      <Footer />
    </div>
  );
}

export default MyApp
