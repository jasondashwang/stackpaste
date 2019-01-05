import { connect } from 'react-redux';
import TitleBarComponent from './TitleBarComponent';
import { updateTitleActionCreator, deleteFileActionCreator, updateSyntaxActionCreator } from '../ducks/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateTitle: (id, title) => {
      dispatch(updateTitleActionCreator(id, title));
    },
    deleteFile: (deleteId) => {
      dispatch(deleteFileActionCreator(deleteId));
    },
    updateSyntax: (id, syntax) => {
      dispatch(updateSyntaxActionCreator(id, syntax));
    },
  };
};

const TitleBarContainer = connect(null, mapDispatchToProps)(TitleBarComponent);

export default TitleBarContainer;
