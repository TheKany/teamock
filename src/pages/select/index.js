import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SelectTeamPage = () => {
  const [cfBoxVisible, setCfBoxVisible] = useState(false);
  const [cfBoxPosition, setCfBoxPosition] = useState(false);
  const [userTeamBoxVisible, setUserTeamBoxVisible] = useState(false);

  useEffect(() => {
    setCfBoxVisible(true);

    setTimeout(() => {
      setCfBoxPosition(true);
    }, 1000);

    setTimeout(() => {
      setUserTeamBoxVisible(true);
    }, 2000);
  }, []);

  const handleTeamBtnClick = () => {};

  return (
    <main className="main-container">
      <div
        style={{ opacity: cfBoxVisible ? 1 : 0 }}
        className={`main__catchphrase ${cfBoxPosition ? "position" : ""}`}
      >
        <p className="main__subTitle">어디서나, 언제나, 팀은</p>
        <h1 className="main__title">팀 마스터</h1>
      </div>

      <div className={`main__btn-box ${userTeamBoxVisible ? "show" : ""}`}>
        <Link
          to={"/sixers"}
          className="main__teamLink"
          onClick={handleTeamBtnClick}
        >
          <div className="main__teamLink-img"></div>
          <p className="main__teamLink-teamName">AM SIXERS</p>
          <div className="main__teamLink-userStatus">master</div>
        </Link>
      </div>
    </main>
  );
};

export default SelectTeamPage;
