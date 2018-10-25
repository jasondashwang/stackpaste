import { connect } from 'react-redux';
import NavbarComponent from './NavbarComponent';

import { createPasteThunk, createVersionThunk } from '../App/ducks/actions';

const mapStateToProps = (state) => {
  return {
    short: state.app.short,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPaste: () => {
      dispatch(createPasteThunk());
    },
    createVersion: () => {
      dispatch(createVersionThunk());
    },
  };
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);

export default NavbarContainer;
