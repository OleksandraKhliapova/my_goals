import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditGoal from '../EditGoal';
import GoalContent from '../GoalContent';

class Goal extends Component {
  state = {
    isEdited: false
  }

  handlerEditGoal = () => {
    this.setState (prevState => ({
      isEdited: !prevState.isEdited
    }));
  }

  render() {
    return (
      <div className="table__goal goal">
        <EditGoal index={this.props.index} editGoal={this.handlerEditGoal}/>
        <GoalContent index={this.props.index} isEdited={this.state.isEdited} editGoal={this.handlerEditGoal}/>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  const goal = state.goals[props.index];

  return {
    goal
  };
}

export default connect(mapStateToProps)(Goal);