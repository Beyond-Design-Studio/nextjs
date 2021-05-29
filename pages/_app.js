import '../styles/globals.css'
import Footer from "../components/footer";



function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-bg-img bg-no-repeat bg-fixed">
      <div className="pb-32">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp
