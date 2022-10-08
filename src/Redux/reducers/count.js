// Reducer là 1 function nhận vào state và bindActionCreators, sau đó return về state mới 
const countReducer = (state = 0, action) => {
    switch (action.type) {
      case "INCREASE":
        // return { ...state, count: state + 1 };
        return state + 1;
      case "DECREASE":
        // return { ...state, count: state - 1}
        return state - 1;
      default:
        return state;
    }
  };

export default countReducer;