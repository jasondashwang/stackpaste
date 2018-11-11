import {
  UPDATE_TERMINAL_BODY,
  RECEIVE_TERMINAL,
} from './actions';

const initialState = {
  body: '',
};

function AppReducer(state = initialState, action) {
  const newState = {
    ...state,
  };

  switch (action.type) {
    case UPDATE_TERMINAL_BODY: {
      newState.body = action.body;
      return newState;
    }

    case RECEIVE_TERMINAL: {
      newState.body = action.terminal.body;
      return newState;
    }

    default:
      return state;
  }
}

export default AppReducer;
