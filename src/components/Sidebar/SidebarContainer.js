import { connect } from 'react-redux';
import SidebarComponent from './SidebarComponent';

import { saveMetaThunk } from './ducks/actions';

const mapStateToProps = (state) => {
  return {
    title: state.title,
    description: state.description,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveMeta: (title, description) => {
      dispatch(saveMetaThunk(title, description));
    },
  };
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);

export default SidebarContainer;
