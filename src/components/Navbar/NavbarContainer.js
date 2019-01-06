import { connect } from 'react-redux';
import NavbarComponent from './NavbarComponent';
import { createPasteThunk, createVersionThunk, resetPasteActionCreator } from '../App/ducks/actions';
import { resetFilesActionCreator } from '../Files/ducks/actions';
import { resetTerminalActionCreator } from '../Terminal/ducks/actions';

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
    reset: () => {
      dispatch(resetPasteActionCreator());
      dispatch(resetFilesActionCreator());
      dispatch(resetTerminalActionCreator());
    },
  };
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);

export default NavbarContainer;
