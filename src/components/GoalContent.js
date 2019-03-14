import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createEditGoalAction } from '../store/reducer';

class GoalContent extends Component {

  state = {
    value: this.props.goal.name,
    price: this.props.goal.price,
    deadline: this.props.goal.deadline
  }

  handleContentChange = (e) => {
    this.setState({ value: e.target.value})
  }

  handlePriceChange = (e) => {
    this.setState({ price: e.target.value})
  }
  
  handleDeadlineChange = (e) => {
    this.setState({ deadline: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const action = createEditGoalAction(this.props.index, this.state.value, this.state.price, this.state.deadline);
    this.props.dispatch(action);

    this.props.editGoal();
  }

  render() {
    if(this.props.isEdited === false) {
      return(
        <>
          <p className="goal__title">{this.props.goal.name}</p>
          <span className="goal__price">{this.props.goal.price}</span>
          <span className="goal__deadline">{this.props.goal.deadline}</span>
        </>
      )
    } else {
      return(
        <form className="edit-form"  onSubmit={this.handleSubmit}>
          <>
            <input onChange={this.handleContentChange} className="goal__input goal__input_content" type="text" value={this.state.value}/>
            <input onChange={this.handlePriceChange} className="goal__input goal__input_price" type="text" value={this.state.price}/>
            <input onChange={this.handleDeadlineChange} className="goal__input goal__input_deadine" type="date" value={this.state.deadline}/>
          </>
          <input className="edit-form__button" type="submit" value="Save" />
        </form>
      )
    }
  }
}

function mapStateToProps(state, props) {
  const goal = state.goals[props.index];
  return {
    goal
  }
}

export default connect (mapStateToProps)(GoalContent);