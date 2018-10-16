import axios from 'axios';

export const RECEIVE_PASTE = 'RECEIVE_PASTE';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';

export const receivePasteActionCreator = (short) => {
  return {
    type: RECEIVE_PASTE,
    short,
  };
};

export const updateTitleActionCreator = (title) => {
  return {
    type: UPDATE_TITLE,
    title,
  };
};

export const updateDescriptionActionCreator = (description) => {
  return {
    type: UPDATE_DESCRIPTION,
    description,
  };
};


export const createPasteThunk = () => {
  return (dispatch, getState) => {

    const { app } = getState();
    const { title, description } = app;

    axios.post('/api/pastes', {
      title,
      description,
    })
      .then(res => res.data)
      .then((createdPaste) => {
        console.log('Successfully created a Paste');
        dispatch(receivePasteActionCreator(createdPaste.short));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
