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

const handleSubmit = (event) => {
  event.preventDefault();
  let currentInput = inputValue
  usersToDoArr.push(currentInput)
  console.log(usersToDoArr);
  setUsersToDo(usersToDoArr => [...usersToDoArr, currentInput])
}


const handleDelete = (event) => {
  console.log(event.target);
  const foundElement =event.nativeEvent.path[1].key;
  console.log(foundElement);
}

  return (
    <div className="App">
      <NavBar/>
      <Main handleDelete={handleDelete} usersToDo={usersToDo} handleSubmit={handleSubmit} handleInput={handleInput}/>
    </div>
  );
}

export default App;
