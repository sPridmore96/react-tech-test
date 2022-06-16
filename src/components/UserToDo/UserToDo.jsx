import React from 'react';
import './UserToDo.scss';
import CheckBoxes from '../CheckBoxes/CheckBoxes';
import Buttons from '../Buttons/Buttons';

const UserToDo = (props) => {
  const { usersToDo, handleDelete } = props;

  const todoJSX = usersToDo.map((todo, index) => {
    return (
      <div key={index} className='userToDo'>
        <div className='userToDo__left'>
        <CheckBoxes />
        <p>{todo}</p>
        </div>
        <Buttons onClick={handleDelete} buttonText={'del'}/>
      </div>
    );
  });

 return(
  <>
  {todoJSX}
  </>
  );
};

export default UserToDo;
