import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home, {
  ReviewsPage,
  PostsPage,
  MyPage,
  Profile,
  AdditionalPage,
  SettingsPage,
  Login,
  Signup,
} from "../../../Pages/index.js";
import KakaoLogin from "../../../Pages/KakaoLogin.js";

const Switcher = () => (
  <Routes>
    <Route path="/reviews" element={<ReviewsPage />} />
    <Route path="/posts" element={<PostsPage />} />
    <Route path="/mypage" element={<MyPage />} />
    <Route path="/" element={<Home />} />
    <Route path="/mypage/profile" element={<Profile />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/additional" element={<AdditionalPage />} />
    <Route path="/kakaologin" element={<KakaoLogin />} />
    <Route path="/mypage/settings" element={<SettingsPage />} />
  </Routes>
);

export default Switcher;
