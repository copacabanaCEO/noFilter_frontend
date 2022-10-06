// import React, { useState, useCallback } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import DatePicker from 'react-date-picker';
// import data from "./high_school.json"
// import Creatable from 'react-select/creatable';
// import Select from 'react-select';
// import CreatableSelect from 'react-select/creatable';

import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";
import { Switcher } from "./components/features/Navigation";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switcher />
      </BrowserRouter>
    </div>
  );
};

export default App;
