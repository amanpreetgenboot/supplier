import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../Component/ui/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { SSRProvider } from "react-bootstrap";
// import { SessionProvider } from "next-auth/react";
// import Footer from '../Component/ui/Footer';

function MyApp({ Component, pageProps }) {
  return <SSRProvider>
        <Navbar />
        <Component {...pageProps} />
        {/* <Footer/> */}
        <script src="js/bootstrap.bundle.js"/>
      </SSRProvider>

}

export default MyApp;

// return <SessionProvider session={pageProps.session}>
//           </SessionProvider>