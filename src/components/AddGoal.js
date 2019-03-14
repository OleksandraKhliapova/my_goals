import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAddGoalAction } from '../store/reducer';

class AddGoal extends Component {

  state = {
    value: '',
    price: '',
    deadline: ''
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }

  handlePriceChange = (e) => {
    this.setState({price: e.target.value});
  }
  
  handleDeadlineChange = (e) => {
    this.setState({deadline: e.target.value});
  }

  handleAddGoal = (e) => {
    e.preventDefault();

    const action = createAddGoalAction(this.state.value, this.state.price, this.state.deadline);
    this.props.dispatch(action);

    this.setState({
      value: '',
      price: '',
      deadline: ''
    });

  }

  render() {
    return(
      <form onSubmit={this.handleAddGoal} className="add-goal-form">
        <input onChange={this.handleValueChange} className="add-goal-form__input add-goal-form__input_value" value={this.state.value} type="text" placeholder="Add new goal" />
        <input onChange={this.handlePriceChange} className="add-goal-form__input add-goal-form__input_price" value={this.state.price} type="text" placeholder="Add price" />
        <input onChange={this.handleDeadlineChange} className="add-goal-form__input add-goal-form__input_deadline" value={this.state.deadline} type="date" />
        <input className="add-goal-form__button" type="submit" value="Add" />
      </form>
    )
  }
}

export default connect ()(AddGoal);