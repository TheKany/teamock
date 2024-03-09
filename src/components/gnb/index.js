import React from "react";
import { useLocation } from "react-router-dom";
import BackBtn from "../buttons/backBtn";
import PageTitle from "../title";
import MenuBtn from "../buttons/menuBtn";
import CloseBtn from "../buttons/closeBtn";

const GnbBar = () => {
  const location = useLocation();

  const onBack = () => {
    window.history.back();
  };

  const onOpenMenu = () => {
    document.querySelector(".dimmed").classList.add("active");
    document.querySelector(".menu").classList.add("active");
  };

  /**
   * left-btn
   * 각 Team메인: 팀 로고
   * 1-depth: 뒤로가기 버튼
   * 2-depth: Nothing
   */
  const isLeftBtn = () => {
    if (location.pathname.includes("team")) return <PageTitle />;
    if (location.pathname.includes("main"))
      return <BackBtn backEvent={onBack} location={location} />;
    if (location.pathname.includes("detail")) return null;
  };

  /**
   * centre-btn
   * 각 Team메인: Nothing
   * 1-depth: 페이지 title
   * 2-depth: 페이지 title
   */
  const isCentreBtn = () => {
    if (location.pathname.includes("team")) return null;
    if (location.pathname.includes("main")) return <PageTitle />;
    if (location.pathname.includes("detail")) return <PageTitle />;
  };

  /**
   * right-btn
   * 각 Team메인: 토글 메뉴
   * 1-depth: 토글 메뉴
   * 2-depth: 페이지 닫기(뒤로가기)
   */
  const isRightBtn = () => {
    if (location.pathname.includes("team"))
      return <MenuBtn onOpenMenu={onOpenMenu} />;
    if (location.pathname.includes("main"))
      return <MenuBtn onOpenMenu={onOpenMenu} />;
    if (location.pathname.includes("detail"))
      return <CloseBtn closeEvent={onBack} />;
  };

  return (
    // gnb: 작업시 컴포넌트 분리
    <nav className="gnb">
      {/* left-btn */}
      {isLeftBtn()}

      {/* centre-title */}
      {isCentreBtn()}

      {/* right-btn */}
      {isRightBtn()}
    </nav>
  );
};

export default GnbBar;
