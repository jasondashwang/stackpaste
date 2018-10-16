import {
  SAVE_META,
} from './actions';

const initialNavState = {
  title: '',
  description: '',
};

function NavReducer(state = initialNavState, { type, title, description }) {
  switch (type) {
    case SAVE_META: {
      return {
        ...state,
        title,
        description,
      };
    }

    default:
      return state;
  }
}

export default NavReducer;
