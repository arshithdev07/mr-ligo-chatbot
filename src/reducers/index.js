import { SEARCH_ITEM_ACTION } from '../actions';
import { SAY_ACTION } from '../actions';

function sourcingReducer(state = [],action) {
  switch(action.type) {
    case SEARCH_ITEM_ACTION:
      const newState = Object.assign({}, state, {transcript:action.payload});
      return newState;
    case SAY_ACTION:
      const result = Object.assign({}, state, {sayResult:action.payload});
      return result;
    default:
      return state;
  }
}

export default sourcingReducer;
