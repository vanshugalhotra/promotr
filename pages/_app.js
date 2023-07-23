import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// Component imports
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TopLoadingBar from "@/components/LoadingBar/TopLoadingBar";
import LoadingBar from "@/components/LoadingBar/LoadingBar";

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
        <TopLoadingBar />
        <LoadingBar />
        {!isHomePage && !isContactPage && <Navbar />}
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </main>
  );
}

export default MyApp;
