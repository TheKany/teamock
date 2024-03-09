import React from "react";

const ToggleMenu = () => {
  const handleSelectTeam = () => {
    window.location.href = "/select";
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

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
          <button className="menu__close-btn" onClick={onCloseMenu}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L25 25M1 25L25 1"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="menu__links">
          <button className="menu__links-btn">메인</button>
          <button className="menu__links-btn">주간 스포츠</button>
          <button className="menu__links-btn">경기 일정</button>
          <button className="menu__links-btn">정보 센터</button>
          <button className="menu__links-btn">공지사항</button>
        </div>
        <div className="menu__gnb">
          <button className="menu__gnb-selectTeam" onClick={handleSelectTeam}>
            팀 선택
          </button>
          <button className="menu__gnb-logout" onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      </div>
    </>
  );
};

export default ToggleMenu;
