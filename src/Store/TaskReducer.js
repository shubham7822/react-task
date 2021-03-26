  
const initialState = {
    Tasks: [],
  
  };
  
  export const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
       case "ADD_TASK":
         return {
          ...state,
          Tasks: [...state.Tasks, action.payload],
         };
       case "UPDATE_TASK":
         return state
     
     
      case "DELETE_TASK":
        let newState = [...state.Tasks]
        return {
          ...state,
          Tasks: newState.filter(item => item.id === action.payload.id)
        }
      default:
        return state;
    }
  };
  