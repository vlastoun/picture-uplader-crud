import { fromJS } from 'immutable';
import { EDITOR_CHANGED } from './constants';

const initialState = fromJS({
  textEditorState: null,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case EDITOR_CHANGED:
      return state
        .set('textEditorState', action.content);
    default:
      return state;
  }
}

export default loginReducer;
