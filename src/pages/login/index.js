import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  useEffect(() => {
    const $fade = document.querySelector(".fade");
    $fade.classList.add("visible");

    return () => {
      $fade.classList.remove("visible");
    };
  }, []);

  const handleKakaoLogin = () => {
    // 카카오 로그인 구현
  };

  return (
    <main className="login-container fade">
      <div className="login__catchphrase">
        <p className="login__subTitle">어디서나, 언제나, 팀은</p>
        <h1 className="login__title">팀 마스터</h1>
      </div>

      <div className="login__btn-box">
        <Link
          to={"/select"}
          className="login__kakao-btn"
          onClick={handleKakaoLogin}
        >
          카카오 로그인
        </Link>
      </div>
    </main>
  );
};

export default LoginPage;
