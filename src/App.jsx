import './App.scss';
import React, {useState} from 'react';

import NavBar from './components/NavBar/NavBar';
import Main from './containers/Main/Main';



function App() {

const [inputValue, setInputValue] = useState('')
const [usersToDo, setUsersToDo] = useState([])

const usersToDoArr = []


const handleInput = (event) => {
  setInputValue(event.target.value)
}

const handleReset = (event) => {
  setUsersToDo([])
}

const resetInput = (event) => {
  // setCurrentInputVal(event.nativeEvent.path[1][0].value) 
}

const handleSubmit = (event) => {
  event.preventDefault();
  let currentInput = inputValue
  usersToDoArr.push(currentInput)
  setUsersToDo(usersToDoArr => [...usersToDoArr, currentInput])
}


const handleDelete = (event) => {
  console.log(event);
  const foundElement = event.target.parentNode.__reactFiber$2vqh0osxwot.alternate.key;
  const copyUserToDo = usersToDo
  copyUserToDo.splice(foundElement, 1)
  console.log(copyUserToDo);
  setUsersToDo()
}

  return (
    <div className="App">
      <NavBar handleReset={handleReset}/>
      <Main  resetInput={resetInput} handleDelete={handleDelete} usersToDo={usersToDo} handleSubmit={handleSubmit} handleInput={handleInput}/>
    </div>
  );
}

export default App;
