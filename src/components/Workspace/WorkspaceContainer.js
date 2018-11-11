import { connect } from 'react-redux';
import WorkspaceComponent from './WorkspaceComponent';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const WorkspaceContainer = connect(mapStateToProps, mapDispatchToProps)(WorkspaceComponent);

export default WorkspaceContainer;
