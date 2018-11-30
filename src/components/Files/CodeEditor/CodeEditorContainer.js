import { connect } from 'react-redux';
import CodeEditorComponent from './CodeEditorComponent';
import { updateBodyActionCreator } from '../ducks/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateBody: (id, body) => {
      dispatch(updateBodyActionCreator(id, body));
    },
  };
};

const CodeEditorContainer = connect(null, mapDispatchToProps)(CodeEditorComponent);

export default CodeEditorContainer;
