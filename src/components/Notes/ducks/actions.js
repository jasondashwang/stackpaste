export const UPDATE_NOTES_BODY = 'UPDATE_NOTES_BODY';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_ROOT_NOTES = 'RECEIVE_ROOT_NOTES';
export const RESET_NOTES = 'RESET_NOTES';

export const resetNotesActionCreator = () => {
  return {
    type: RESET_NOTES,
  };
};

export const updateBodyActionCreator = (body) => {
  return {
    type: UPDATE_NOTES_BODY,
    body,
  };
};

export const receiveNotesActionCreator = (notes) => {
  return {
    type: RECEIVE_NOTES,
    notes,
  };
};

export const receiveRootNotesActionCreator = (notes) => {
  return {
    type: RECEIVE_ROOT_NOTES,
    notes,
  };
};
