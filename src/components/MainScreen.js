import React, { Component } from 'react';
import { connect } from 'react-redux';

import Goal from './Goal';
import AddGoal from './AddGoal';
import TableName from './TableName';
import GoalTitles from './GoalTitles';
import '../App.css';

class MainScreen extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <TableName />
          <AddGoal />
          <div className="goals-block">
            <GoalTitles />
            {this.props.goals.map((goal, index) => {
              return <Goal index={index} key={goal.name + index} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { goals } = state;

  return {
    goals
  }
}

export default connect(mapStateToProps)(MainScreen);