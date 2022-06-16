import React from 'react';
import './Main.scss';
import Inputs from '../../components/Inputs/Inputs';
import UserToDo from '../../components/UserToDo/UserToDo';
import Buttons from '../../components/Buttons/Buttons';

const Main = (props) => {

  const {handleCheckBox, handleInput, handleSubmit, usersToDo,handleDelete } = props


  return (
    <div className="main">
      <form onSubmit={handleSubmit} className='main__form'>
        <Inputs name={'userInput'} placeHolder={'Add your task here...'} handleInput={handleInput} />
        <Buttons buttonText={'Add'}/>
      </form>
      <UserToDo handleCheckBox={handleCheckBox} handleDelete={handleDelete} usersToDo={usersToDo} />
    </div>
  );
};

export default Main;
