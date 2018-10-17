import { connect } from 'react-redux';
import SidebarComponent from './SidebarComponent';

import { updateTitleActionCreator, updateDescriptionActionCreator } from '../App/ducks/actions';

const mapStateToProps = (state) => {
  return {
    title: state.app.title,
    description: state.app.description,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleTitleChange: (evt) => {
      dispatch(updateTitleActionCreator(evt.target.value));
    },
    handleDescriptionChange: (evt) => {
      dispatch(updateDescriptionActionCreator(evt.target.value));
    },
  };
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);

export default SidebarContainer;
