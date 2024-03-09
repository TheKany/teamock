import React from "react";
import { Link } from "react-router-dom";

const NoticeMainPage = () => {
  return (
    <div>
      <Link to={`/notice/detail/${1}`}>공지사항 리스트 1</Link>
    </div>
  );
};

export default NoticeMainPage;
