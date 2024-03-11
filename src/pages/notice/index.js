import React from "react";
import { Link } from "react-router-dom";
import ContentsLayout from "../../components/layout";

const NoticeMainPage = () => {
  return (
    <ContentsLayout>
      <div className="noticeMain__listItem">
        <Link to={`/notice/detail/${1}`}>
          <span>공지사항 리스트 1</span>
          <span>20xx.xx.xx</span>
        </Link>
      </div>

      <div className="noticeMain__listItem">
        <Link to={`/notice/detail/${2}`}>
          <span>공지사항 리스트 2</span>
          <span>20xx.xx.xx</span>
        </Link>
      </div>

      <div className="noticeMain__listItem">
        <Link to={`/notice/detail/${3}`}>
          <span>공지사항 리스트 3</span>
          <span>20xx.xx.xx</span>
        </Link>
      </div>
    </ContentsLayout>
  );
};

export default NoticeMainPage;
