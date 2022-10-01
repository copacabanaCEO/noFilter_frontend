import { useEffect } from "react";
import { KAKAO_LOGIN_API } from "../config";
import { useNavigate } from "react-router";

const KakaoLogin = () => {
  const navigate = useNavigate();
  let params = new URLSearchParams(document.location.search);
  const code = params.get("code");
  useEffect(() => {
    fetch(`${KAKAO_LOGIN_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ code: code }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
      })
      .then(navigate("/additional"));
  }, [code, navigate]);
};

export default KakaoLogin;
