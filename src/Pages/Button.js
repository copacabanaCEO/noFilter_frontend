import React from "react";
import { KAKAO_AUTH_URL } from "../config";
import kakao_login_button from "./kakao_login_button.png";

const LoginButton = () => {
  const kakaoAuthUrl = `${KAKAO_AUTH_URL}`;
  return (
    <a href={kakaoAuthUrl}>
      <img src={kakao_login_button} alt="Kakao Login" />
    </a>
  );
};

export default LoginButton;
