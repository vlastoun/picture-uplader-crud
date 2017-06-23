import { fromJS } from 'immutable';
import { TAB_CLICKED } from './constants';

const initialState = fromJS({
  tabActive: '',
  tabName: '',
});

function TabReducer(state = initialState, action) {
  switch (action.type) {
    case TAB_CLICKED:
      return state
        .set('tabActive', action.tab.id)
        .set('tabName', action.tab.label);
    default:
      return state;
  }
}

export default TabReducer;
