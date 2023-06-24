import React, { useEffect } from "react";
import { useRouter } from "next/router";

// Component imports
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

//css imports
import "@/styles/globals.css";

// redux
import { Provider } from "react-redux";
import { store } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
