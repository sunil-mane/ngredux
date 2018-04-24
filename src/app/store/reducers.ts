import { LIST_USERS } from './actions';
import { INITIAL_STATE } from './IAppState';

export function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LIST_USERS:
      return Object.assign({}, state, { users: action.payload });
    default:
      return state;
  }
}
