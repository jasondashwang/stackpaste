export const UPDATE_FILE_TITLE = 'UPDATE_FILE_TITLE';
export const CREATE_FILE = 'CREATE_FILE';
export const FOCUS_FILE = 'FOCUS_FILE';
export const DELETE_FILE = 'DELETE_FILE';
export const UPDATE_FILE_BODY = 'UPDATE_FILE_BODY';
export const RECEIVE_FILES = 'RECEIVE_FILES';

export const receiveFilesActionCreator = (files) => {
  return {
    type: RECEIVE_FILES,
    files,
  };
};

export const updateBodyActionCreator = (fid, body) => {
  return {
    type: UPDATE_FILE_BODY,
    fid,
    body,
  };
};

export const deleteFileActionCreator = (fid) => {
  return {
    type: DELETE_FILE,
    fid,
  };
};

export const focusFileActionCreator = (fid) => {
  return {
    type: FOCUS_FILE,
    fid,
  };
};

export const createFileActionCreator = () => {
  return {
    type: CREATE_FILE,
  };
};

export const updateTitleActionCreator = (fid, title) => {
  return {
    type: UPDATE_FILE_TITLE,
    fid,
    title,
  };
};