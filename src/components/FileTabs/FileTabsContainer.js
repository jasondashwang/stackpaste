import { connect } from 'react-redux';
import FileTabsComponent from './FileTabsComponent';
import { updateTitleActionCreator, createFileActionCreator, focusFileActionCreator, deleteFileActionCreator } from '../CodeEditor/ducks/actions';

const mapStateToProps = (state) => {
  return {
    files: state.files,
  };
};

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

const FileTabsContainer = connect(mapStateToProps, mapDispatchToProps)(FileTabsComponent);

export default FileTabsContainer;
