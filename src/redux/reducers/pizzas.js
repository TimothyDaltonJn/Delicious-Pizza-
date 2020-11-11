const initealState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initealState, action) => {
  if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default pizzas;
