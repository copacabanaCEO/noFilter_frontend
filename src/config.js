// const BASE_URL = process.env.REACT_APP_BASE_URL;
// const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
// const KAKAO_REDIRECT_URL = process.env.REACT_APP_KAKAO_REDIRECT_URL;
// const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code&prompt=login`;
// const KAKAO_LOGIN_API = `${BASE_URL}/kakao/login/`;

// export {
//   BASE_URL,
//   KAKAO_REST_API_KEY,
//   KAKAO_REDIRECT_URL,
//   KAKAO_AUTH_URL,
//   KAKAO_LOGIN_API,
// };

const REACT_APP_BASE_URL = "http://52.78.211.155:8000/selT";
const REACT_APP_KAKAO_REST_API_KEY = "7d3a46e96cff0ac7fdf74da818f0d07c";
const REACT_APP_KAKAO_REDIRECT_URL = "http://localhost:3000/kakaologin";
const BASE_URL = REACT_APP_BASE_URL;
const KAKAO_REST_API_KEY = REACT_APP_KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URL = REACT_APP_KAKAO_REDIRECT_URL;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code&prompt=login`;
const KAKAO_LOGIN_API = `${BASE_URL}/kakao/login/`;

export {
  BASE_URL,
  KAKAO_REST_API_KEY,
  KAKAO_REDIRECT_URL,
  KAKAO_AUTH_URL,
  KAKAO_LOGIN_API,
};
