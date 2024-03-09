import React from "react";
import { Link } from "react-router-dom";
import CloseBtn from "../buttons/closeBtn";

const ToggleMenu = () => {
  const handleSelectTeam = () => {};

  const handleLogout = () => {};

  const onCloseMenu = () => {
    document.querySelector(".dimmed").classList.remove("active");
    document.querySelector(".menu").classList.remove("active");
  };

  return (
    <>
      {/* <!-- 토글 메뉴 --> */}
      <div className="dimmed"></div>
      <div className="menu">
        <div className="menu__close">
          <CloseBtn closeEvent={onCloseMenu} />
        </div>
        <div className="menu__links">
          <button className="menu__links-btn">메인</button>
          <button className="menu__links-btn">주간 스포츠</button>
          <button className="menu__links-btn">경기 일정</button>
          <button className="menu__links-btn">정보 센터</button>
          <button className="menu__links-btn">공지사항</button>
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
