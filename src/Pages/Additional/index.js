import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-date-picker';
import data from "./high_school.json"
import Creatable from 'react-select/creatable';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import "./Additional.css"
import { useNavigate } from "react-router-dom";

var arr = []
for (let i=0; i<data.schools.length; i++) {
  arr.push( {label: data.schools[i].name + ", " + data.schools[i].location, value: i});
}



function BasicExample() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/"; 
    navigate(path, {state: {name:"aknur"}});
  }

  const [value, onChange] = useState(new Date());
  const [inputValue, setInputValue] = useState('');
  const [selectedValues, setselectedValues] = useState({ selected: [] });

  const [selection, setSelection] = useState(arr);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  useCallback(
    (node) => {
      console.log(node);
    },
    [inputValue]
  );

  const handleOnChange = () => {
    const newOption = { label: inputValue, inputValue };

    inputValue !== '' && setSelection([...selection, newOption]);

    setInputValue('');

    setselectedValues(selection);
  };

  return (
    <div className="container"><h3 className="info"> Additional Information </h3>
      
      <div className="vertical-center" style = {{"border": "0.2rem solid #ececec"}}>
      
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>High School</Form.Label>
        <CreatableSelect
        options={selection}
        onChange={handleOnChange}
        isSearchable={true}
        onInputChange={handleInputChange}
        inputValue={inputValue}
        value={selectedValues.selected}
        inputValue={inputValue}
        controlShouldRenderValue={true}
        />
      </Form.Group>
      <Form.Group>
      <Form.Label>Status</Form.Label>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Student"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Parent"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Teacher"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Birthday</Form.Label>
        <div>
      <DatePicker 
        label="jhb"
        onChange={onChange} value={value} />
      </div>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={routeChange}>
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default BasicExample;

