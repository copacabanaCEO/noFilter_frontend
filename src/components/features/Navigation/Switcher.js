import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home, {
    ReviewsPage,
    PostsPage,
    MyPage,
    Profile,
    AdditionalPage
} from "../../../Pages/index.js"
import Main from "../../../Pages/Main"
import KakaoLogin from "../../../Pages/Login";

const Switcher = () => (
        <Routes>
            <Route path="/reviews" element={ <ReviewsPage /> } />
            <Route path="/posts" element={ <PostsPage /> } />
            <Route path="/mypage" element={ <MyPage/> } />
            <Route path="/index" element={ <Home /> } />
            <Route path="/mypage/profile" element={ <Profile />} />
            <Route path="/signup" element={ <Main />} />
            <Route path="/additional" element={ <AdditionalPage />} />
            <Route path="/kakaologin" element={<KakaoLogin />} />
        </Routes>
)

export default Switcher