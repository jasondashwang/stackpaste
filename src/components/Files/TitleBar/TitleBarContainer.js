import { connect } from 'react-redux';
import TitleBarComponent from './TitleBarComponent';
import { updateTitleActionCreator } from '../ducks/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateTitle: (id, title) => {
      dispatch(updateTitleActionCreator(id, title));
    },
  };
};

const TitleBarContainer = connect(null, mapDispatchToProps)(TitleBarComponent);

export default TitleBarContainer;
