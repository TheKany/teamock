import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import CloseBtn from "../buttons/closeBtn";

const ToggleMenu = () => {
  const location = useLocation();
  const [paramUrl] = useSearchParams();

  const handleSelectTeam = () => {
    onCloseMenu();
  };

  const handleLogout = () => {
    onCloseMenu();
  };

  const onCloseMenu = () => {
    document.querySelector(".dimmed").classList.remove("active");
    document.querySelector(".menu").classList.remove("active");

    window.history.back();
  };

  const [isPage, setIsPage] = useState(null);
  useEffect(() => {
    const disabledBtn = () => {
      if (!location.pathname.includes("main")) return null;

      if (location.pathname.includes("team")) {
        return setIsPage("team");
      }

      if (location.pathname.includes("schedule")) {
        return setIsPage("schedule");
      }

      if (location.pathname.includes("notice")) {
        return setIsPage("notice");
      }
    };

    disabledBtn();
  }, [location.pathname]);

  useEffect(() => {
    if (paramUrl.get("menu") === "ok") {
      document.querySelector(".dimmed").classList.add("active");
      document.querySelector(".menu").classList.add("active");
    }
  }, [location.pathname]);

  return (
    <>
      {/* <!-- 토글 메뉴 --> */}
      <div className="dimmed"></div>
      <div className="menu">
        <div className="menu__close">
          <CloseBtn closeEvent={onCloseMenu} />
        </div>
        <div className="menu__links">
          <Link
            to={"/team/main"}
            className={`menu__links-btn ${
              isPage === "team" ? "disabled" : null
            }`}
          >
            메인
          </Link>
          <button
            className={`menu__links-btn ${
              isPage === "weeklyNews" ? "disabled" : null
            }`}
          >
            주간 스포츠
          </button>
          <Link
            to={"/schedule/main"}
            className={`menu__links-btn ${
              isPage === "schedule" ? "disabled" : null
            }`}
          >
            경기 일정
          </Link>
          <button
            className={`menu__links-btn ${
              isPage === "info" ? "disabled" : null
            }`}
          >
            정보 센터
          </button>
          <Link
            to={"/notice/main"}
            className={`menu__links-btn ${
              isPage === "notice" ? "disabled" : null
            }`}
          >
            공지사항
          </Link>
        </div>
        <div className="menu__gnb">
          <Link
            to={"/select"}
            className="menu__gnb-selectTeam"
            onClick={handleSelectTeam}
          >
            팀 선택
          </Link>
          <Link to={"/"} className="menu__gnb-logout" onClick={handleLogout}>
            로그아웃
          </Link>
        </div>
      </div>
    </>
  );
};

export default ToggleMenu;
