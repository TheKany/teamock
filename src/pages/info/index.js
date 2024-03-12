import React, { useEffect, useState } from "react";

const InfoCentreMainPage = () => {
  // 임시 선수 데이터
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/player/index.json");
        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // 프로필 열기
  const [openId, setOpenId] = useState(null);
  const onClickProfile = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  useEffect(() => {
    if (openId !== null) {
      const element = document.querySelector(`.info__teamList-item.open`);

      console.log("🚀 | useEffect | element:", element);
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const isVisible =
          elementRect.top >= 0 &&
          elementRect.left >= 0 &&
          elementRect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          elementRect.right <=
            (window.innerWidth || document.documentElement.clientWidth);

        if (!isVisible) {
          element.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    }
  }, [openId]);

  useEffect(() => {
    console.log(window.innerWidth);
  }, [openId]);

  return (
    <main className="info-container">
      <div className="info__teamName-container">
        <h2 className="info__teamName">AM SIXERS</h2>
        <p className="info__startDate">SINCE 2023.10.03</p>
      </div>

      <div className="info__teamList-container">
        {/* 테이블 헤더 (변경 x) */}
        <div className="info__teamList-item th">
          <div className="info__item photo th"></div>

          {/* 기본 정보 */}
          <p className="info__item subInfo th"></p>

          {/* 별명 */}
          <p className="info__item nickname">별명</p>

          {/* 승률 */}
          <p className="info__item winRate">승률</p>

          {/* 출석율 */}
          <p className="info__item AttRate">출석율</p>

          {/* 플레이스타일 */}
          <p className="info__item style">플레이 스타일</p>
        </div>

        {data?.map((el, idx) => {
          return (
            // 선수
            <div
              key={`No.${idx + 1}: ${el.id}_${el.name}`}
              className={`info__teamList-item ${
                openId === el.id ? "open" : ""
              }`}
            >
              <button
                className="info__item-btn"
                onClick={() => onClickProfile(el.id)}
              >
                <div className="info__item photo"></div>

                {/* 기본 정보 */}
                <div className="info__item subInfo">
                  <p className="info__subInfo-text number">#{el.id}</p>
                  <p className="info__subInfo-text position">{el.position}</p>
                  <p className="info__subInfo-text name">{el.name}</p>
                </div>

                {/* 별명 */}
                <p className="info__item nickname">{el.nickname}</p>

                {/* 승률 */}
                <p className="info__item winRate">{el.winRate}%</p>

                {/* 출석율 */}
                <p className="info__item attRate">{el.attRate}%</p>

                {/* 플레이스타일 */}
                <p className="info__item style">{el.style}</p>
              </button>

              {openId === el.id ? (
                <div className="info__item-detail">
                  <div className="info__detail-img">
                    <img src={`/img/${el.imgSrc}`} alt="선수 사진" />
                  </div>
                  <div className="info__detail-contents"></div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default InfoCentreMainPage;
