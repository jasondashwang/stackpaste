import { connect } from 'react-redux';
import NotesComponent from './NotesComponent';
import { updateBodyActionCreator } from './ducks/actions';

const mapStateToProps = (state) => {
  return {
    body: state.notes.body,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBody: (body) => {
      dispatch(updateBodyActionCreator(body));
    },
  };
};

const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(NotesComponent);

export default NotesContainer;
