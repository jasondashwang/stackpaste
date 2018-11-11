import {
  RECEIVE_PASTE,
  UPDATE_TITLE,
  UPDATE_DESCRIPTION,
  DONE_SEARCHING,
  NOT_FOUND,
} from './actions';

const initialState = {
  title: '',
  short: '',
  description: '',
  searching: true,
  notFound: false,
};

function AppReducer(state = initialState, action) {

  switch (action.type) {
    case NOT_FOUND: {
      return {
        ...state,
        notFound: true,
      };
    }

    case DONE_SEARCHING: {
      return {
        ...state,
        searching: false,
      };
    }

    case RECEIVE_PASTE: {
      const { short, title, description, _id } = action.paste;

      return {
        ...state,
        short,
        title,
        description,
        _id,
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
