import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpButton.css";
const SignUpButton = ({ isLogin, setIsLogin }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="signUpButton">
      {!isLogin && (
        <>
          <a href="/signup" className="goToSignUp">
            회원가입
          </a>
          <a href="/login" className="goToLogin">
            로그인
          </a>
        </>
      )}
      {isLogin && (
        <div className="userTitle" onMouseOver={() => setIsMenuVisible(true)}>
          홍길동님 안녕하세요
        </div>
      )}
      {isMenuVisible && (
        <div
          className="userMenuWrap"
          onMouseLeave={() => setIsMenuVisible(false)}
        >
          <p className="myPageMenuTitle">마이 페이지</p>
          <div className="myPageMenuWrap">
            <button
              className="myPageProfile"
              onClick={() => {
                navigate("/mypage/profile");
                setIsMenuVisible(false);
              }}
            >
              내 정보
            </button>
            <button
              className="MyPageSettings"
              onClick={() => {
                navigate("/mypage/settings");
                setIsMenuVisible(false);
              }}
            >
              설정
            </button>
          </div>
          <p className="generalMenuTitle">기타</p>
          <div className="generalMenuWrap">
            <button
              className="generalLogout"
              onClick={() => {
                setIsLogin(false);
                navigate("/login");
                setIsMenuVisible(false);
              }}
            >
              로그아웃
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpButton;
