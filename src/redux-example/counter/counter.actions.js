export class CounterActions {
  increment = () => (dispatch) => {
    const storeData = {
      type: "INCREMENT",
    };
    dispatch(storeData);
  };

  decrement = () => (dispatch) => {
    const storeData = {
      type: "DECREMENT",
    };
    dispatch(storeData);
  };
}

export default new CounterActions();
