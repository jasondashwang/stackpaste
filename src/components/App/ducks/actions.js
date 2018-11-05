import axios from 'axios';
import history from '../../../history';
import { receiveFilesActionCreator } from '../../Files/ducks/actions';

export const RECEIVE_PASTE = 'RECEIVE_PASTE';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';

export const receivePasteActionCreator = (paste) => {
  return {
    type: RECEIVE_PASTE,
    paste,
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

export const getPasteThunk = (short, version = '') => {
  return (dispatch) => {
    if (short || version) {
      axios.get(`/api/pastes/${short}/${version}`)
        .then(res => res.data)
        .then((paste) => {
          dispatch(receivePasteActionCreator(paste));
          dispatch(receiveFilesActionCreator(paste.files));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
};

const preparePayload = (state) => {
  const { app, files } = state;
  const { title, description } = app;

  const newFiles = [];
  files.fids.forEach((fid) => {
    newFiles.push(files[fid]);
  });

  return {
    title,
    description,
    files: newFiles,
  };
};

export const createPasteThunk = () => {
  return (dispatch, getState) => {
    axios.post('/api/pastes', preparePayload(getState()))
      .then(res => res.data)
      .then((createdPaste) => {
        dispatch(receivePasteActionCreator(createdPaste));
        dispatch(receiveFilesActionCreator(createdPaste.files));
        history.push(`/${createdPaste.short}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const createVersionThunk = () => {
  return (dispatch, getState) => {

    const state = getState();
    const { short } = state.app;

    axios.post(`/api/pastes/${short}`, preparePayload(state))
      .then(res => res.data)
      .then((createdPaste) => {
        dispatch(receivePasteActionCreator(createdPaste));
        dispatch(receiveFilesActionCreator(createdPaste.files));
        history.push(`/${createdPaste.short}/${createdPaste.version}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
