import React, { useState, useRef } from 'react'
import Person from './components/Person'

function App() {
  const name = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const n = name.current.value;
    n == "" ? alert("Please fill the input field!") : setShow(true);
  }

  return (
    <Person name={name} submitForm={submitForm} show = {show}></Person>
  )
}

export default App;