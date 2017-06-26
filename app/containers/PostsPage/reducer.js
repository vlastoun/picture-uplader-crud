import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  error: null,
});

function PostsPageReducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}

export default PostsPageReducer;
