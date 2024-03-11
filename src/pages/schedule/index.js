import React from "react";
import ContentsLayout from "../../components/layout";
import { Link } from "react-router-dom";

const ScheduleMainPage = () => {
  return (
    <ContentsLayout isBg={true}>
      <div className="schedule__title-noPlan">
        <p className="schedule__title-text">현재</p>
        <p className="schedule__title-text">경기 일정이 없습니다.</p>
      </div>

      <div className="schedule__btn">
        <button className="schedule__btn-makePlan">경기일정 만들기</button>
        <Link to={"/team/main"} className="schedule__btn-home">
          홈으로
        </Link>
      </div>
    </ContentsLayout>
  );
};

export default ScheduleMainPage;
