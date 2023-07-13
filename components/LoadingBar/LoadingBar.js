import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setProgress, setLoading } from "@/slices/globalSlice";
import { useRouter } from "next/router";

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
      }, 2000);
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
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center h-screen bg-black bg-opacity-60 z-50">
          <Image
            alt="Loading..."
            src={"/Assets/loader.gif"}
            height={100}
            width={100}
          />
        </div>
      )}
    </div>
  );
};

export default LoadingBar;
