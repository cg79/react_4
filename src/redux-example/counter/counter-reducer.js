const initialState = {
  counterValue: 0,
};

function counterReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case "INCREMENT":
      return {
        counterValue: state.counterValue + 1,
      };
    case "DECREMENT":
      return {
        counterValue: state.counterValue - 1,
      };
    default:
      return state;
  }
}

export default counterReducer;
