import './App.scss';
import React, { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import Main from './containers/Main/Main';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [usersToDo, setUsersToDo] = useState([]);
  const [checked, setChecked] = useState();

  const usersToDoArr = [];

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleReset = (event) => {
    setUsersToDo([]);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    let currentInput = inputValue;
    if (inputValue === '') {
      return alert('Please Enter A ToDo');
    } else {
      setUsersToDo((usersToDoArr) => [...usersToDoArr, currentInput]);
    }
    event.target[0].value = ''
  };

  const handleCheckBox = (event) => {
    let checked = event.target.checked;
    setChecked(checked);
    const textClass = event.target.parentElement.nextSibling.classList
    console.log(textClass);
    // console.log(checked);
    // console.log(event);

    if (checked) {
      textClass.add("line")
    } else {
      textClass.remove("line")
    }
  };

  const handleDelete = (event) => {
    const foundElement = event.target.parentElement.parentElement.id
    const copyUserToDo = [...usersToDo];
     copyUserToDo.splice(foundElement, 1);
    setUsersToDo(copyUserToDo);
  };

  return (
    <div className="App">
      <NavBar handleReset={handleReset} />
      <Main
        handleCheckBox={handleCheckBox}
        handleDelete={handleDelete}
        usersToDo={usersToDo}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      />
    </div>
  );
}

export default App;
