import { connect } from 'react-redux';
import FileTabsComponent from './FileTabsComponent';
import { updateTitleActionCreator, createFileActionCreator, focusFileActionCreator, deleteFileActionCreator } from '../ducks/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateTitle: (fid, title) => {
      dispatch(updateTitleActionCreator(fid, title));
    },
    createFile: () => {
      dispatch(createFileActionCreator());
    },
    focusFile: (fid) => {
      dispatch(focusFileActionCreator(fid));
    },
    deleteFile: (fid) => {
      dispatch(deleteFileActionCreator(fid));
    },
  };
};

const FileTabsContainer = connect(null, mapDispatchToProps)(FileTabsComponent);

export default FileTabsContainer;
