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
      usersToDoArr.push(currentInput);
      setUsersToDo((usersToDoArr) => [...usersToDoArr, currentInput]);
    }
    event.target[0].value = ''
  };

  const handleCheckBox = (event) => {
    let checked = event.target.checked;
    setChecked(checked);

    if (checked) {
    }
  };

  const handleDelete = (event) => {
    const foundElement = event.target.parentElement.parentElement
    const foundElementValue = event.target.parentElement.parentElement.children[0].children[1].innerHTML;
    const copyUserToDo = usersToDo;

     copyUserToDo.splice(foundElementValue, 1);
    setUsersToDo(copyUserToDo);
    foundElement.remove()
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
