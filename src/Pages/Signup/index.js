import React, { useState } from "react";
import "./index.css";
import LoginButton from "../Button";
import instance_logo from "./instance_logo.png";
import { useNavigate } from "react-router";

function Signup() {
  const [input_email_value, set_input_email_value] = useState("");
  const [input_password_value, set_input_password_value] = useState("");
  const [input_name_value, set_input_name_value] = useState("");
  const [signup_failed, set_signup_failed] = useState("");
  const navigate = useNavigate();

  const handdle_email_input = (e) => {
    const element = e.currentTarget;
    const value = element.value;
    set_input_email_value(value);
  };
  const handdle_passwod_input = (e) => {
    const element = e.currentTarget;
    const value = element.value;
    set_input_password_value(value);
  };
  const handdle_name_input = (e) => {
    const element = e.currentTarget;
    const value = element.value;
    set_input_name_value(value);
  };

  const regExp = /^[0-9a-zA-Z]+[-_.]?[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]{2,3}$/;

  const regForm = () => {
    regExp.test(input_email_value) &&
    input_password_value.length > 5 &&
    input_name_value.length > 1
      ? make_account()
      : set_signup_failed("이름 또는 이메일 또는 비밀번호가 잘못되었습니다.");
  };

  const make_account = () => {
    const request_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        name: input_name_value,
        email: input_email_value,
        password: input_password_value,
      },
    };
    fetch("API", request_options);
    navigate("/additional");
  };

  return (
    <div className="signup">
      <form
        className="signup_inner_top"
        onSubmit={(e) => {
          e.preventDefault();
          regForm();
        }}
      >
        <div className="selti_logo">
          <img src={instance_logo} alt="logo" />
        </div>
        <div className="input_name_wrap">
          <input
            type="text"
            value={input_name_value}
            autoComplete="on"
            className="input_name"
            onChange={handdle_name_input}
            style={{
              fontSize: `${input_name_value !== "" ? "0.75" : "1"}rem`,
              padding: `${
                input_name_value !== ""
                  ? "1.025rem 0.5rem 0.35rem 0.5rem"
                  : "0.5rem"
              }`,
            }}
          ></input>
          <span
            className="input_name_span"
            style={{
              top: `${input_name_value !== "" ? "0.3" : "0.8"}rem`,
              fontSize: `${input_name_value !== "" ? "0.6" : "0.8"}rem`,
            }}
          >
            이름
          </span>
        </div>
        <div className="input_email_wrap">
          <input
            type="email"
            value={input_email_value}
            autoComplete="on"
            className="input_email"
            onChange={handdle_email_input}
            style={{
              fontSize: `${input_email_value !== "" ? "0.75" : "1"}rem`,
              padding: `${
                input_email_value !== ""
                  ? "1.025rem 0.5rem 0.35rem 0.5rem"
                  : "0.5rem"
              }`,
            }}
          ></input>
          <span
            className="input_email_span"
            style={{
              top: `${input_email_value !== "" ? "0.8" : "1.2"}rem`,
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
                  ? "1.025rem 0.5rem 0.35rem 0.5rem"
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
          className="siginup_submit"
          type="submit"
          disabled={
            !(
              input_email_value !== "" &&
              input_password_value !== "" &&
              input_name_value !== ""
            )
          }
        >
          회원가입
        </button>
        <div className="help_messege">{signup_failed}</div>
        <div className="partition">
          <div className="partition_line"></div>
          <div className="partition_text">또는</div>
          <div className="partition_line"></div>
        </div>
        <div className="kakao_login">
          <LoginButton />
        </div>
      </form>
      <div className="signup_inner_bottom">
        <p className="go_to_signin">
          이미 계정이 있으신가요?
          <a href="/login">로그인</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
