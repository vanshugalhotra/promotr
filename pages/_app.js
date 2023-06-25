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

import { setProgress, setWindowWidth } from "@/slices/globalSlice";

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

  useEffect(() => {
    const handleRouteChangeStart = () => {
      store.dispatch(setProgress(40));
    };

    const handleRouteChangeComplete = () => {
      store.dispatch(setProgress(100));
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

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
