import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const MenuBtn = () => {
  const location = useLocation();
  const [paramUrl, setParamUrl] = useSearchParams();

  const onOpenMenu = () => {
    document.querySelector(".dimmed").classList.add("active");
    document.querySelector(".menu").classList.add("active");

    const newSearchParams = new URLSearchParams(paramUrl);
    newSearchParams.set("menu", "ok");
    setParamUrl(newSearchParams);
  };

  useEffect(() => {
    if (paramUrl.get("menu") === "ok") {
      document.querySelector(".dimmed").classList.add("active");
      document.querySelector(".menu").classList.add("active");
    } else {
      document.querySelector(".dimmed")?.classList.remove("active");
      document.querySelector(".menu")?.classList.remove("active");
    }
  }, [location.pathname]);

  return (
    <button className="nav-menu_btn" onClick={onOpenMenu}>
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 22.6713H25M1 11.9863H25M1 1.30139H25"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default MenuBtn;
