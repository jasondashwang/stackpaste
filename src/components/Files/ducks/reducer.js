import {
  UPDATE_FILE_TITLE,
  UPDATE_FILE_BODY,
  RECEIVE_FILES,
  CREATE_FILE,
  FOCUS_FILE,
  DELETE_FILE,
  RECEIVE_ROOT_FILES,
  UPDATE_FILE_SYNTAX,
  RESET_FILES,
} from './actions';
// what we plan on receiving from backend

const initialState = {
  focusIndex: 0,
  ids: ['0'],
  0: {
    _id: '0',
    title: 'Filename',
    body: '',
    syntax: 'text',
  },
  rootFiles: {},
};

let count = 1;

function AppReducer(state = initialState, action) {
  let newState = {
    ...state,
  };

  switch (action.type) {
    case RESET_FILES: {
      return {
        ...initialState,
      };
    }

    case RECEIVE_ROOT_FILES: {
      newState.rootFiles = {};
      action.rootFiles.forEach((rootFile) => {
        if (rootFile) newState.rootFiles[rootFile._id] = rootFile;
      });
      return newState;
    }

    case RECEIVE_FILES: {
      const { files } = action;

      newState = {
        focusIndex: 0,
        ids: [],
        rootFiles: {},
      };

      files.forEach((file) => {
        newState.ids.push(file._id);
        newState[file._id] = file;
      });

      return newState;
    }

    case UPDATE_FILE_BODY: {
      const { id, body } = action;
      newState[id] = {
        ...state[id],
      };
      newState[id].body = body;
      return newState;
    }

    case UPDATE_FILE_TITLE: {
      const { id, title } = action;
      newState[id] = {
        ...state[id],
      };
      newState[id].title = title;
      return newState;
    }

    case UPDATE_FILE_SYNTAX: {
      const { id, syntax } = action;
      newState[id] = {
        ...state[id],
      };
      newState[id].syntax = syntax;
      return newState;
    }

    case CREATE_FILE: {
      newState.ids = [...state.ids];
      // Add temp id as just the current count and increase by 1
      const newId = String(count);
      count += 1;

      newState.ids.push(newId);
      newState[newId] = {
        _id: newId,
        title: 'Filename',
        body: '',
        syntax: 'text',
      };
      newState.focusIndex = newState.ids.length - 1;
      return newState;
    }

    case FOCUS_FILE: {
      newState.focusIndex = action.index;
      return newState;
    }

    case DELETE_FILE: {
      const { deleteId } = action;
      newState.ids = state.ids.filter(id => id !== deleteId);
      delete newState[deleteId];

      if (newState.ids.length === 0) {
        return {
          focusIndex: 0,
          ids: ['0'],
          0: {
            _id: '0',
            title: 'Filename',
            body: '',
            syntax: 'text',
          },
          rootFiles: newState.rootFiles,
        };
      }

      // If we are deleting a file we are currently focused on
      if (newState.focusIndex === 0) {
        newState.focusIndex = 0;
      } else {
        newState.focusIndex -= 1;
      }
      return newState;
    }

    default:
      return state;
  }
}

export default AppReducer;
