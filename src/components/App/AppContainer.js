import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppComponent from './AppComponent';
import { getPasteThunk } from './ducks/actions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPaste: () => {
      if (!ownProps.first) {
        dispatch(getPasteThunk(ownProps.match.url.slice(1)));
      }
    },
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default withRouter(AppContainer);
