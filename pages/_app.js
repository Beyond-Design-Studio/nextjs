import '../styles/globals.css'
import Footer from "../components/footer";
import NavButton from "../components/nav";


function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-bg-img bg-no-repeat bg-fixed">

      <NavButton classes="p-12 sm:p-20 flex fixed justify-end right-0" />
      
      <Component {...pageProps} />
      
      <Footer />
    </div>
  );
}

export default MyApp
