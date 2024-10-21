import dynamic from "next/dynamic";
import React from "react";
import animationData from "../assets/lottie/loading.json";
import "./styles/LoadingItem.css";

const LottiePlayer = dynamic(() => import("react-lottie-player"), {
  ssr: false,
});

const LoadingItem = () => {
  return (
    <div className="loadingContainer">
      <LottiePlayer
        loop
        animationData={animationData}
        play
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
};

export default LoadingItem;
