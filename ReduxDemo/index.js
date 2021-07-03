const redux = require('redux');
const createStore = redux.createStore;

// Action creator
const buyCake = () => {
  // Action
  return {
    type: 'BUY_CAKE',
    payload: 1,
  };
};

// State
const intialState = {
  noOfCakes: 10,
};

// Reducer
const cakeReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'BUY_CAKE':
      return { ...state, noOfCakes: state.noOfCakes - action.payload };
    default:
      return state;
  }
};

// Store
const store = createStore(cakeReducer);
console.log('initial state ', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('updated state is', store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
