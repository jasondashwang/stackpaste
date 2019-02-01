import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
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
  divider: {
    borderTop: '1px solid #2d333b',
    height: '32px',
    backgroundColor: '#20262e',
  },
  header: {
    textAlign: 'center',
    color: '#cfd0d2',
  },
  notepad: {
    verticalAlign: 'middle',
  },
});

const WorkspaceComponent = (props) => {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <div className={classes.toolbar} />
      <Files />
      <div className={classes.divider}>
        <Typography variant="h6" noWrap className={classes.header}>
          <AssignmentIcon className={classes.notepad} />
          &nbsp; Notepad
        </Typography>
      </div>
      <Notes />
    </main>
  );
};

WorkspaceComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkspaceComponent);
