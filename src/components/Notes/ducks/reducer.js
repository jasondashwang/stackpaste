import {
  UPDATE_NOTES_BODY,
  RECEIVE_NOTES,
  RESET_NOTES,
} from './actions';

const initialState = {
  _id: '',
  body: '',
};

function AppReducer(state = initialState, action) {
  const newState = {
    ...state,
  };

  switch (action.type) {
    case RESET_NOTES: {
      return {
        ...initialState,
      };
    }

    case UPDATE_NOTES_BODY: {
      newState.body = action.body;
      return newState;
    }

    case RECEIVE_NOTES: {
      const { body, _id } = action.notes;
      newState.body = body;
      newState._id = _id;
      return newState;
    }

    default:
      return state;
  }
}

export default AppReducer;
