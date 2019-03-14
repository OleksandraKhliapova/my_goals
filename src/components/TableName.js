import React from 'react';
import { connect } from 'react-redux';

const TableName = (props) => {
  console.log(props.tableName);
  return (
    <div className="table__headline">{props.tableName}</div>
  )
}

function mapStateToProps(state) {
  const { tableName } = state;

  return {
    tableName
  }
}

export default connect (mapStateToProps)(TableName);