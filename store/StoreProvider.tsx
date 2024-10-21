"use client";
import { ReactNode, useEffect, useState } from "react";
import StoreContext from "./StoreContext";
import en from "../languages/en.json";
import ar from "../languages/ar.json";
import he from "../languages/he.json";
import LoadingItem from "@/components/LoadingItem";

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
  const [language, setlanguage] = useState<"en" | "ar" | "he">("en");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // language translation function
  const translation = {
    en,
    ar,
    he,
  };

  const changeLanguage = (lang: "en" | "ar" | "he") => {
    setlanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language") as
        | "en"
        | "ar"
        | "he";
      if (storedLanguage) {
        setlanguage(storedLanguage);
      }
    }
  }, []);

  if (isLoading) {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return <LoadingItem />;
  }

  const providerValue = {
    // current language
    t: translation[language],

    // state
    language,
    isLoading,

    // setter function
    setlanguage,
    setIsLoading,

    // fuctions
    changeLanguage,
  };

  return (
    <StoreContext.Provider value={providerValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
