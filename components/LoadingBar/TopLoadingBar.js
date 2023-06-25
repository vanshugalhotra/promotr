import React from "react";
import LoadingBar from "react-top-loading-bar";
import { useSelector, useDispatch } from "react-redux";
import { setProgress } from "@/slices/globalSlice";

const TopLoadingBar = () => {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.global.progress);

  return (
    <LoadingBar
      color="#f05024"
      progress={progress}
      waitingTime={400}
      onLoaderFinished={() => {
        dispatch(setProgress(0));
      }}
    />
  );
};

export default TopLoadingBar;
