import React, { useState } from "react";
import "./index.css";
import LoginButton from "../Button";
import instance_logo from "./instance_logo.png";
import { useNavigate } from "react-router";

function Signup() {
  /**
   * 이메일, 비밀번호. 비밀번호확인, 이름, 회원가입 오류 알람메세지 State 입니다.
   */
  const [input_email_value, set_input_email_value] = useState("");
  const [input_password_value, set_input_password_value] = useState("");
  const [input_password_check_value, set_input_password_check_value] =
    useState("");
  const [input_name_value, set_input_name_value] = useState("");
  const [signup_failed, set_signup_failed] = useState("");

  const navigate = useNavigate();

  /**
   * 이메일 입력 함수입니다.
   * input_email_value에 onchange이벤트를 통해서 실행됩니다.
   */
  const handdle_email_input = (e) => {
    const element = e.currentTarget;
    const value = element.value;
    set_input_email_value(value);
  };

  /**
   * 비밀번호 입력 함수입니다.
   * input_password_value에 onchange이벤트를 통해서 실행됩니다.
   */
  const handdle_passwod_input = (e) => {
    const element = e.currentTarget;
    const value = element.value;
    set_input_password_value(value);
  };

  /**
   * 비밀번호 확인 입력 함수입니다.
   * input_password_check_value에 onchange이벤트를 통해서 실행됩니다.
   */
  const handdle_passwod_check_input = (e) => {
    const element = e.currentTarget;
    const value = element.value;
    set_input_password_check_value(value);
  };

  /**
   * 이름 입력 함수입니다.
   * input_name_value에 onchange이벤트를 통해서 실행됩니다.
   */
  const handdle_name_input = (e) => {
    const element = e.currentTarget;
    const value = element.value;
    set_input_name_value(value);
  };

  /**
   * 이메일 유효성 검사에 사용되는 정규식입니다.
   */
  const regExp = /^[0-9a-zA-Z]+[-_.]?[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]{2,3}$/;

  /**
   * 회원가입 실행 버튼에서 사용되는 함수입니다.
   * 이메일 정규식, 비밀번호 길이, 이름 입력 유효성 검사를 통과하면 계정 생성 API와 연결합니다.
   * 이외의 경우에는 회원가입 실패 메세지를 출력합니다.
   */
  const regForm = (evnet) => {
    event.preventDefault();

    regExp.test(input_email_value) &&
    input_password_value.length > 5 &&
    input_name_value.length > 1
      ? make_account()
      : set_signup_failed("이름 또는 이메일 또는 비밀번호가 잘못되었습니다.");
  };

  /**
   * 회원가입 실행버튼 유효성 검사를 통과하면 실행되는 함수입니다.
   * API 응답 StateCode에 따라서 알람 메세지를 출력합니다.
   * 정상적으로 동작될 시 응답으로 넘겨받은 JWT 인증토큰과 갱신토큰을 LocalStorage에 저장합니다.
   * 이후 추가정보 입력페이지로 연결됩니다.
   */
  const make_account = () => {
    const request_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: input_name_value,
        email: input_email_value,
        password1: input_password_value,
        password2: input_password_check_value,
      }),
    };
    fetch("http://10.36.180.196:8000/user/signup", request_options)
      .then((response) =>
        response.status >= 400
          ? set_signup_failed(
              "이름 또는 이메일 또는 비밀번호의 형식이 잘못되었습니다."
            )
          : response.json()
      )
      .then((res) => {
        localStorage.setItem("access_token", res.access_token);
        localStorage.setItem("refresh_token", res.refresh_token);
        navigate("/additional");
      });
  };

  return (
    <div className="signup">
      <form className="signup_inner_top" onSubmit={regForm}>
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
        <div className="input_password_wrap">
          <input
            type="password"
            value={input_password_check_value}
            autoComplete="on"
            className="input_password"
            onChange={handdle_passwod_check_input}
            style={{
              fontSize: `${
                input_password_check_value !== "" ? "0.75" : "1"
              }rem`,
              padding: `${
                input_password_check_value !== ""
                  ? "1.025rem 0.5rem 0.35rem 0.5rem"
                  : "0.5rem"
              }`,
            }}
          ></input>
          <span
            className="input_password_span"
            style={{
              top: `${input_password_check_value !== "" ? "0.8" : "1.2"}rem`,
              fontSize: `${
                input_password_check_value !== "" ? "0.6" : "0.8"
              }rem`,
            }}
          >
            비밀번호확인
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
