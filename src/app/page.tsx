"use client";
import Header from "@/components/Header";
import React, { useContext } from "react";
import StoreContext from "../../store/StoreContext";
import animationData from "../assets/lottie/loading.json";
import dynamic from "next/dynamic";
import LoadingItem from "@/components/LoadingItem";

const Page = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default Page;
