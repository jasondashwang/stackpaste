import axios from 'axios';

export const SAVE_META = 'SAVE_META';

export const saveMetaActionCreator = (title, description) => {
  return {
    type: SAVE_META,
    title,
    description,
  };
};

export const saveMetaThunk = (title, description) => {
  return (dispatch) => {
    axios.put('/api/pastes/meta', {
      title,
      description,
    })
      .then((res) => {
        console.log('Success');
        dispatch(saveMetaActionCreator(title, description));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

