import {
  RECEIVE_PASTE,
  UPDATE_TITLE,
  UPDATE_DESCRIPTION,
} from './actions';

function AppReducer(state = { title: '', short: '', description: '' }, action) {

  switch (action.type) {
    case RECEIVE_PASTE: {
      const { short, title, description } = action.paste;

      return {
        ...state,
        short,
        title,
        description,
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
