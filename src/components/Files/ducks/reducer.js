import {
  UPDATE_FILE_TITLE,
  UPDATE_FILE_BODY,
  RECEIVE_FILES,
  CREATE_FILE,
  FOCUS_FILE,
  DELETE_FILE,
} from './actions';
// what we plan on receiving from backend

const initialState = {
  focusFid: 0,
  fids: [0],
  0: {
    title: 'New File',
    body: '',
  },
};

function AppReducer(state = initialState, action) {
  const newState = {
    ...state,
  };

  switch (action.type) {
    case RECEIVE_FILES: {
      const { files } = action;
      const { length } = files;
      const newFids = [];

      for (let fid = 0; fid < length; fid += 1) {
        newFids.push(fid);
        newState[fid] = files[fid];
      }

      newState.fids = newFids;
      return newState;
    }

    case UPDATE_FILE_BODY: {
      const { fid, body } = action;
      newState[fid] = {
        ...state[fid],
      };
      newState[fid].body = body;
      return newState;
    }

    case UPDATE_FILE_TITLE: {
      const { fid, title } = action;
      newState[fid] = {
        ...state[fid],
      };
      newState[fid].title = title;
      return newState;
    }

    case CREATE_FILE: {
      newState.fids = [...state.fids];
      // Get the largest fid which is always at the end
      const newFid = newState.fids[newState.fids.length - 1] + 1;
      newState.fids.push(newFid);
      newState[newFid] = {
        title: 'New File',
        body: '',
      };
      newState.focusFid = newFid;
      return newState;
    }

    case FOCUS_FILE: {
      newState.focusFid = action.fid;
      return newState;
    }

    case DELETE_FILE: {
      newState.fids = state.fids.filter(fid => fid !== action.fid);
      delete newState[action.fid];

      if (newState.fids.length === 0) {
        return {
          focusFid: 0,
          fids: [0],
          0: {
            title: 'New File',
            body: '',
          },
        };
      }
      // If we are deleting a file we are currently focused on
      if (newState.focusFid === action.fid) {
        const currIndex = state.fids.indexOf(action.fid);
        if (currIndex === 0) {
          newState.focusFid = newState.fids[0];
        } else {
          newState.focusFid = state.fids[currIndex - 1];
        }
      }
      return newState;
    }

    default:
      return state;
  }
}

export default AppReducer;
