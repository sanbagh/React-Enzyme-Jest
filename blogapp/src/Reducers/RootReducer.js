const rootReducer = (state, action) => {
  if (action.type === 'DELETE_POST') {
    state.posts = state.posts.filter((x) => x.id !== action.id);
  }
  return state;
};
export default rootReducer;
