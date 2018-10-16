import { connect } from 'react-redux';
import NavbarComponent from './NavbarComponent';

import { createPasteThunk } from '../App/ducks/actions';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPaste: () => {
      dispatch(createPasteThunk());
    },
  };
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);

export default NavbarContainer;
