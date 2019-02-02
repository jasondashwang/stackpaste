import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Files from '../Files/FilesContainer';
import Notes from '../Notes/NotesContainer';

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#20262e',
    maxWidth: 'calc(100% - 241px)',
    maxHeight: '100%',
  },
  toolbar: theme.mixins.toolbar,
});

const WorkspaceComponent = (props) => {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <div className={classes.toolbar} />
      <Files className={classes.float} />
      <Notes />
    </main>
  );
};

WorkspaceComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkspaceComponent);
