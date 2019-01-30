import {
  RECEIVE_PASTE,
  DONE_SEARCHING,
  NOT_FOUND,
  RESET_PASTE,
  SERVER_ERROR,
  TOGGLE_TUTORIAL,
} from './actions';

const initialState = {
  _id: '',
  version: 0,
  short: '',
  searching: true,
  notFound: false,
  serverError: false,
  tutorial: false,
};

function AppReducer(state = initialState, action) {

  switch (action.type) {
    case RESET_PASTE: {
      return {
        ...initialState,
        searching: false,
        notifications: [],
      };
    }

    case TOGGLE_TUTORIAL: {
      return {
        ...state,
        tutorial: !state.tutorial,
      };
    }

    case NOT_FOUND: {
      return {
        ...state,
        notFound: true,
      };
    }

    case SERVER_ERROR: {
      return {
        ...state,
        serverError: true,
      };
    }

    case DONE_SEARCHING: {
      return {
        ...state,
        searching: false,
      };
    }

    case RECEIVE_PASTE: {
      const { short, _id, version } = action.paste;

      return {
        ...state,
        short,
        _id,
        version,
      };
    }

    default:
      return state;
  }
}

export default AppReducer;
