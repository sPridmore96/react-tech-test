import React from 'react';
import './UserToDo.scss';
import CheckBoxes from '../CheckBoxes/CheckBoxes';
import Buttons from '../Buttons/Buttons';

const UserToDo = (props) => {
  const { handleCheckBox, usersToDo, handleDelete } = props;

  const todoJSX = usersToDo.map((todo, index) => {
    return (
      <div key={index} className='userToDo'>
        <div className='userToDo__left'>
        <CheckBoxes handleCheckBox={handleCheckBox} />
        <p>{todo}</p>
        </div>
        <div className='userToDo__button'>
        <Buttons onClick={handleDelete} buttonText={'del'}/>
        </div>
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
