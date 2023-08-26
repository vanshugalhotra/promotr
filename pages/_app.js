import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import dynamic from "next/dynamic";

import { Analytics } from "@vercel/analytics/react";

// Component imports
import Navbar from "@/components/Navbar/Navbar";
const Footer = dynamic(() => import("@/components/Footer/Footer")); // lazy loading the component

import TopLoadingBar from "@/components/LoadingBar/TopLoadingBar";
import LoadingBar from "@/components/LoadingBar/LoadingBar";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// fonts
import { DM_Sans } from "next/font/google";
const DM_SANS = DM_Sans({ subsets: ["latin"], weight: ["400"] });

//css imports
import "@/styles/globals.css";

// redux
import { Provider } from "react-redux";
import { store } from "../store";

import { setWindowWidth } from "@/slices/globalSlice";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleResize = () => {
      store.dispatch(setWindowWidth(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const router = useRouter();

  // Check if the current route is the home page ("/")
  const isHomePage = router.pathname === "/";
  const isContactPage = router.pathname === "/contact";

  return (
    <main className={DM_SANS.className}>
      <Provider store={store}>
        <Head>
          <title>Promotr</title>
        </Head>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <TopLoadingBar />
        <LoadingBar />

        {!isHomePage && !isContactPage && <Navbar />}
        <Component {...pageProps} />
        <Analytics />
        {/* <Footer /> */}
      </Provider>
    </main>
  );
}

export default MyApp;
