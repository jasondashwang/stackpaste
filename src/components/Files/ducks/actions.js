export const UPDATE_FILE_TITLE = 'UPDATE_FILE_TITLE';
export const CREATE_FILE = 'CREATE_FILE';
export const FOCUS_FILE = 'FOCUS_FILE';
export const DELETE_FILE = 'DELETE_FILE';
export const UPDATE_FILE_BODY = 'UPDATE_FILE_BODY';
export const RECEIVE_FILES = 'RECEIVE_FILES';
export const RECEIVE_ROOT_FILES = 'RECEIVE_ROOT_FILES';
export const UPDATE_FILE_SYNTAX = 'UPDATE_FILE_SYNTAX';
export const RESET_FILES = 'RESET_FILES';

export const resetFilesActionCreator = () => {
  return {
    type: RESET_FILES,
  };
};

export const updateSyntaxActionCreator = (id, syntax) => {
  return {
    type: UPDATE_FILE_SYNTAX,
    id,
    syntax,
  };
};

export const receiveRootFilesActionCreator = (rootFiles) => {
  return {
    type: RECEIVE_ROOT_FILES,
    rootFiles,
  };
};

export const receiveFilesActionCreator = (files) => {
  return {
    type: RECEIVE_FILES,
    files,
  };
};

export const updateBodyActionCreator = (id, body) => {
  return {
    type: UPDATE_FILE_BODY,
    id,
    body,
  };
};

export const deleteFileActionCreator = (deleteId) => {
  return {
    type: DELETE_FILE,
    deleteId,
  };
};

export const focusFileActionCreator = (index) => {
  return {
    type: FOCUS_FILE,
    index,
  };
};

export const createFileActionCreator = () => {
  return {
    type: CREATE_FILE,
  };
};

export const updateTitleActionCreator = (id, title) => {
  return {
    type: UPDATE_FILE_TITLE,
    id,
    title,
  };
};
