// import React, { useState, useCallback } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import DatePicker from 'react-date-picker';
// import data from "./high_school.json"
// import Creatable from 'react-select/creatable';
// import Select from 'react-select';
// import CreatableSelect from 'react-select/creatable';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import KakaoLogin from "./Pages/Login";
import BasicExample from "./Pages/Additional"
import HomePage from "./Pages/index"
import Header from "./layouts/Header"
import { Switcher } from "./components/features/Navigation"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<BasicExample />} />
          <Route path="/kakaologin" element={<KakaoLogin />} />
          <Route path="/additional" element={<BasicExample />} />
          <Route path="/index" element={(
            <> */}
              <Header/>
              <Switcher/>
            {/* </>
          )} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
};

export default App;

