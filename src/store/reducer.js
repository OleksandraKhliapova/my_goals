import store from ".";

const initialState = {
  tableName: "My goals for 2019",
  goals: [
    {
      name: "Bali trip",
      deadline: "2019-09-10",
      price: "350k Rub"
    },
    {
      name: "Wedding",
      deadline: "2019-06-15",
      price: "700k Rub"
    },
    {
      name: "Job",
      deadline: "2019-03-31",
      price: "0"
    },
    {
      name: "Perfect body",
      deadline: "2019-05-15",
      price: "0"
    }
  ]
}

const REMOVE_GOAL = 'REMOVE_GOAL';
export function createRemoveGoalAction(index) {
  return {type: REMOVE_GOAL, index}
}

const EDIT_GOAL = 'EDIT_GOAL';
export function createEditGoalAction(index, name, price, deadline) {
  return {type: EDIT_GOAL, index, name, price, deadline}
}

const ADD_GOAL = 'ADD_GOAL';
export function createAddGoalAction(value, price, deadline) {
  return {type: ADD_GOAL, value, price, deadline}
}

export default function reducer (state = initialState, action) {

  const {type, index, value, name, price, deadline} = action;
  const goals = [...state.goals];

  switch(type) {
    case REMOVE_GOAL:
      goals.splice(index, 1)

      return {
        ...state,
        goals
      };

    case EDIT_GOAL:
      goals[index].name = name;
      goals[index].price = price;
      goals[index].deadline = deadline;

      return {
        ...state,
        goals
      };

    case ADD_GOAL:
      goals.unshift({name: value, deadline: deadline, price: price});

      return{
        ...state,
        goals
      };

    default:
      return state
  }
}