import React from "react";
import dynamic from "next/dynamic";
import Logo from "./Logo";
import Language from "./language/Language";
import {useLanguage} from "../../hooks/useLanguage";

const Theme = dynamic(() => import("./theme/Theme"), {
  ssr: false,
});

const index = () => {
  const { t, locale } = useLanguage();

  return (
    <header className="md:fixed left-0 right-0 top-0 md:bg-palette-fill shadow-sm pt-4 z-[1000]">
      <div className="flex flex-col md:px-4 mb-2">
        <div className="flex items-center justify-between md:order-2 md:mt-2  relative">
          <div>
            <Logo />
          </div>
          <div className="hidden md:flex md:items-center md:justify-between">
            <p> {t[`discussion`]}</p>
            {/*<Language />*/}
            {/*<Theme />*/}
          </div>
        </div>
        <hr className="md:hidden" />
      </div>
    </header>
  );
};

export default index;
