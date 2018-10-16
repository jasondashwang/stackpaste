import {
  RECEIVE_PASTE,
  UPDATE_TITLE,
  UPDATE_DESCRIPTION,
} from './actions';

function AppReducer(state = { title: '', short: '', description: '' }, action) {
  const { short, title, description } = action;

  switch (action.type) {
    case RECEIVE_PASTE: {
      return {
        ...state,
        short,
        title,
        description,
      };
    }

    case UPDATE_TITLE: {
      return {
        ...state,
        title,
      };
    }

    case UPDATE_DESCRIPTION: {
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
