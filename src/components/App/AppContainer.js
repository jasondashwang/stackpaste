import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppComponent from './AppComponent';
import { getPasteThunk } from './ducks/actions';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPaste: () => {
      dispatch(getPasteThunk(ownProps.match.params.short, ownProps.match.params.version));
    },
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default withRouter(AppContainer);
