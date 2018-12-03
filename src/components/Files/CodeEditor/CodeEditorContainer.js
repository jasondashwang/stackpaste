import { connect } from 'react-redux';
import CodeEditorComponent from './CodeEditorComponent';
import { updateBodyActionCreator } from '../ducks/actions';

const mapStateToProps = (state) => {
  return {
    version: state.app.version,
    rootFiles: state.files.rootFiles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBody: (id, body) => {
      dispatch(updateBodyActionCreator(id, body));
    },
  };
};

const CodeEditorContainer = connect(mapStateToProps, mapDispatchToProps)(CodeEditorComponent);

export default CodeEditorContainer;
