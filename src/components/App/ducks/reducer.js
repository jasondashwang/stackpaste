import {
  RECEIVE_PASTE,
  UPDATE_TITLE,
  UPDATE_DESCRIPTION,
  DONE_SEARCHING,
  NOT_FOUND,
  RESET_PASTE,
  SERVER_ERROR,
} from './actions';

const initialState = {
  _id: '',
  version: 0,
  title: '',
  short: '',
  description: '',
  searching: true,
  notFound: false,
  serverError: false,
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
      const { short, title, description, _id, version } = action.paste;

      return {
        ...state,
        short,
        title,
        description,
        _id,
        version,
      };
    }

    case UPDATE_TITLE: {
      const { title } = action;
      return {
        ...state,
        title,
      };
    }

    case UPDATE_DESCRIPTION: {
      const { description } = action;
      return {
        ...state,
        description,
      };
    }

    default:
      return state;
  }
}

export default AppReducer;
