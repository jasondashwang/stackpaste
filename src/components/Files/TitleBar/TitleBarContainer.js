import { connect } from 'react-redux';
import TitleBarComponent from './TitleBarComponent';
import { updateTitleActionCreator, deleteFileActionCreator } from '../ducks/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateTitle: (id, title) => {
      dispatch(updateTitleActionCreator(id, title));
    },
    deleteFile: (deleteId) => {
      dispatch(deleteFileActionCreator(deleteId));
    },
  };
};

const TitleBarContainer = connect(null, mapDispatchToProps)(TitleBarComponent);

export default TitleBarContainer;
