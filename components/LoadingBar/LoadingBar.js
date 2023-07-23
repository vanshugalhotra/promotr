import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setProgress, setLoading } from "@/slices/globalSlice";
import { useRouter } from "next/router";


import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
// import ReactPlayer from "react-player/lazy";


const LoadingBar = () => {
  const loading = useSelector((state) => state.global.loading);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      dispatch(setProgress(40));
      dispatch(setLoading(true));
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        dispatch(setProgress(100));
        dispatch(setLoading(false));
      }, 100);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router, dispatch]);

  return (
    <div>
      {loading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center h-screen bg-black bg-opacity-60 z-[500000]">
     <ReactPlayer
        url={"/Assets/loader.mp4"}
        playing
        loop
        width={100}
        height={100}
      />
        </div>
      )}
    </div>
  );
};

export default LoadingBar;
