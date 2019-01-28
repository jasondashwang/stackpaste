import { connect } from 'react-redux';
import TutorialComponent from './TutorialComponent';

import { toggleTutorialActionCreator } from '../App/ducks/actions';

const mapStateToProps = (state) => {
  return {
    open: state.app.tutorial,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => {
      dispatch(toggleTutorialActionCreator());
    },
  };
};

const TutorialContainer = connect(mapStateToProps, mapDispatchToProps)(TutorialComponent);

export default TutorialContainer;
