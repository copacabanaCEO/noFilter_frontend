import React, { useState } from "react";
import LoginButton from "../Button";
import "./index.css";
import instance_logo from "./instance_logo.png";
import { useNavigate } from "react-router";

function Signin() {
  const [input_email_value, set_input_email_value] = useState("");
  const [input_password_value, set_input_passwod_value] = useState("");
  const [login_failed, set_login_failed] = useState("");
  const navigate = useNavigate();

  const handdle_email_input = (e) => {
    const element = e.currentTarget;
    const value = element.value;
    set_input_email_value(value);
  };
  const handdle_passwod_input = (e) => {
    const element = e.currentTarget;
    const value = element.value;
    set_input_passwod_value(value);
  };

  const regExp = /^[0-9a-zA-Z]+[-_.]?[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]{2,3}$/;

  const regForm = () => {
    regExp.test(input_email_value) === true && input_password_value.length > 5
      ? do_login()
      : set_login_failed("이메일 또는 비밀번호가 잘못되었습니다.");
  };

  const do_login = () => {
    const request_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: input_email_value,
        password: input_password_value,
      }),
    };
    fetch("http://10.36.180.153:8000/user/login/", request_options)
      .then((response) =>
        response.status >= 400
          ? set_signup_failed("이메일 또는 비밀번호가 잘못되었습니다.")
          : response.json()
      )
      .then((res) => {
        localStorage.setItem("refresh_token", res.refresh_token);
        localStorage.setItem("access_token", res.access_token);
        navigate("/");
      });
  };

  return (
    <div className="signin">
      <form
        className="signin_inner_top"
        onSubmit={(e) => {
          e.preventDefault();
          regForm();
        }}
      >
        <div className="selti_logo">
          <img src={instance_logo} alt="logo" />
        </div>
        <div className="input_email_wrap">
          <input
            type="email"
            value={input_email_value}
            autoComplete="on"
            className="input_email"
            onChange={handdle_email_input}
            required
            style={{
              fontSize: `${input_email_value !== "" ? "0.75" : "1"}rem`,
              padding: `${
                input_email_value !== ""
                  ? "0.9rem 0.5rem 0.475rem 0.5rem"
                  : "0.5rem"
              }`,
            }}
          ></input>
          <span
            className="input_email_span"
            style={{
              top: `${input_email_value !== "" ? "0.7" : "1.2"}rem`,
              fontSize: `${input_email_value !== "" ? "0.6" : "0.8"}rem`,
            }}
          >
            이메일
          </span>
        </div>
        <div className="input_password_wrap">
          <input
            type="password"
            value={input_password_value}
            autoComplete="on"
            className="input_password"
            onChange={handdle_passwod_input}
            style={{
              fontSize: `${input_password_value !== "" ? "0.75" : "1"}rem`,
              padding: `${
                input_password_value !== ""
                  ? "0.9rem 0.5rem 0.475rem 0.5rem"
                  : "0.5rem"
              }`,
            }}
          ></input>
          <span
            className="input_password_span"
            style={{
              top: `${input_password_value !== "" ? "0.8" : "1.2"}rem`,
              fontSize: `${input_password_value !== "" ? "0.6" : "0.8"}rem`,
            }}
          >
            비밀번호
          </span>
        </div>
        <button
          className="siginin_submit"
          type="submit"
          disabled={!(input_email_value !== "" && input_password_value !== "")}
        >
          로그인
        </button>
        <div className="help_messege">{login_failed}</div>
        <div className="partition">
          <div className="partition_line"></div>
          <div className="partition_text">또는</div>
          <div className="partition_line"></div>
        </div>
        <div className="kakao_login">
          <LoginButton />
        </div>
      </form>
      <div className="signin_inner_bottom">
        <p className="go_to_signup">
          계정이 없으신가요?
          <a href="/signup">가입하기</a>
        </p>
      </div>
    </div>
  );
}

export default Signin;
