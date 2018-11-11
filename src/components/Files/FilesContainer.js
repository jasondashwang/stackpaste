import { connect } from 'react-redux';
import FilesComponent from './FilesComponent';

const mapStateToProps = (state) => {
  return {
    files: state.files,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const FilesContainer = connect(mapStateToProps, mapDispatchToProps)(FilesComponent);

export default FilesContainer;
