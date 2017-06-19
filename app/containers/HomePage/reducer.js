import { fromJS } from 'immutable';


// The initial state of the App
const initialState = fromJS({
  user: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default homeReducer;
