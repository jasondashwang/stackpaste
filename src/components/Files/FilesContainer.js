import { connect } from 'react-redux';
import FilesComponent from './FilesComponent';
import { createFileActionCreator, focusFileActionCreator } from './ducks/actions';

const mapStateToProps = (state) => {
  return {
    files: state.files,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createFile: () => {
      dispatch(createFileActionCreator());
    },
    focusFile: (index) => {
      dispatch(focusFileActionCreator(index));
    },
  };
};

const FilesContainer = connect(mapStateToProps, mapDispatchToProps)(FilesComponent);

export default FilesContainer;
