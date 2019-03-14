import React from 'react';
import { connect } from 'react-redux';
import { createRemoveGoalAction } from '../store/reducer';

const EditGoal = (props) => { 

  const removeGoal = (index) => {
    const action = createRemoveGoalAction(index);
    props.dispatch(action);
  }

  return (
    <div className="goal__buttons">
      <img onClick={() => props.editGoal()} className="goal__icon" src={require('../img/edit-icon.svg')} />
      <img onClick={() => removeGoal(props.index)} className="goal__icon" src={require('../img/close-icon.svg')} />
    </div>
  )
}

function mapStateToProps(state, props) {
  const goal = state.goals[props.index];

  return {
    goal
  };
}

export default connect (mapStateToProps)(EditGoal);