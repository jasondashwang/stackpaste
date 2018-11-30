import { connect } from 'react-redux';
import FileTabsComponent from './FileTabsComponent';
import { updateTitleActionCreator, createFileActionCreator, focusFileActionCreator, deleteFileActionCreator } from '../ducks/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateTitle: (id, title) => {
      dispatch(updateTitleActionCreator(id, title));
    },
    createFile: () => {
      dispatch(createFileActionCreator());
    },
    focusFile: (index) => {
      dispatch(focusFileActionCreator(index));
    },
    deleteFile: (index) => {
      dispatch(deleteFileActionCreator(index));
    },
  };
};

const FileTabsContainer = connect(null, mapDispatchToProps)(FileTabsComponent);

export default FileTabsContainer;
