import React from "react";
import { useParams } from "react-router-dom";
import ContentsLayout from "../../../components/layout";

const NoticeDetailPage = () => {
  const param = useParams();

  return (
    <ContentsLayout isBg={true}>
      <h2 className="noticeDetail__title">
        공지사항 상세페이지테스트 {param.id}
      </h2>

      <p className="noticeDetail__contents">
        공지사항 내용입니다.공지사항 내용입니다.공지사항 내용입니다.공지사항
        내용입니다.공지사항 내용입니다.공지사항 내용입니다.공지사항
        내용입니다.공지사항 내용입니다.공지사항 내용입니다.공지사항
        내용입니다.공지사항 내용입니다.
      </p>
    </ContentsLayout>
  );
};

export default NoticeDetailPage;
