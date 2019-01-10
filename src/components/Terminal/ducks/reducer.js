import {
  UPDATE_TERMINAL_BODY,
  RECEIVE_TERMINAL,
  RECEIVE_ROOT_TERMINAL,
  RESET_TERMINAL,
} from './actions';

const initialState = {
  _id: '',
  body: '',
  root: '',
  rootBody: '',
};

function AppReducer(state = initialState, action) {
  const newState = {
    ...state,
  };

  switch (action.type) {
    case RESET_TERMINAL: {
      return {
        ...initialState,
      };
    }

    case UPDATE_TERMINAL_BODY: {
      newState.body = action.body;
      return newState;
    }

    case RECEIVE_TERMINAL: {
      const { body, _id, root } = action.terminal;
      newState.body = body;
      newState._id = _id;
      newState.root = root ? root : '';
      return newState;
    }

    case RECEIVE_ROOT_TERMINAL: {
      const { body } = action.terminal;
      newState.rootBody = body;
      return newState;
    }

    default:
      return state;
  }
}

export default AppReducer;
