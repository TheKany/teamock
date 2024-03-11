import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TeamMainPage = () => {
  useEffect(() => {
    document.querySelector(".fade").classList.add("visible");
  }, []);

  // 카카오 AD-fit
  useEffect(() => {
    let ins = document.createElement("ins");
    let scr = document.createElement("script");
    ins.className = "kakao_ad_area";
    ins.style = "display:none; width:100%;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute("data-ad-width", "320");
    ins.setAttribute("data-ad-height", "100");
    ins.setAttribute("data-ad-unit", "DAN-l5MI0YbhcmtXuxH2");
    document.querySelector(".adfit").appendChild(ins);
    document.querySelector(".adfit").appendChild(scr);
  }, []);

  return (
    <main className="tm-container fade responsive">
      {/* <!-- 상단 공지사항 --> */}
      <div className="tm__notice">
        <Link to={"/notice/main"} className="tm__noticeBtn">
          <p className="tm__notice-title">
            <span>공지</span>
            <span>사항</span>
          </p>
          <p className="tm__notice-contentsTitle">
            식서스의 공지사항입니다. 꼭 읽어주세요
          </p>
          <p className="tm__notice-date">2024.03.08</p>
        </Link>
      </div>

      {/* <!-- 배너 --> */}
      <div className="tm__banner"></div>

      {/* <!-- 경기 일정 --> */}
      <div className="tm__plan">
        <Link to={"/schedule/main"} className="tm__planBtn">
          <p className="tm__plan-title">경기일정</p>

          <div className="tm__plan-texts">
            <p className="tm__plan-text">SIXERS</p>
            <p className="tm__plan-text">2024.01.27 (토)</p>
          </div>
        </Link>
      </div>

      {/* <!-- 지난 경기 --> */}
      <div className="tm__playRecord">
        <p className="tm__playRecord-title">
          <span>지난</span>
          <span>경기</span>
        </p>
        <p className="tm__playRecord-record">
          <span>블랙팀 승리 (00승 00패)</span>
          <span>/ MVP 이 승</span>
        </p>
        <p className="tm__playRecord-date">2024.03.02</p>
      </div>

      {/* <!-- 메뉴 버튼 --> */}
      <div className="tm__teamBtn">
        <button className="tm__teamBtn-infoCentre">
          <p className="tm__infoCentre-title">정보센터</p>
          <p className="tm__infoCentre-subTitle">우리팀에 대해 알아보아요</p>
        </button>
        <button className="tm__teamBtn-inGameMode">인게임모드</button>
      </div>

      {/* 광고 */}
      <div className="adfit"></div>
    </main>
  );
};

export default TeamMainPage;
