import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Files from '../Files/FilesContainer';
import Terminal from '../Terminal/TerminalContainer';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#20262e',
    maxWidth: 'calc(100% - 241px)',
  },
  toolbar: theme.mixins.toolbar,
  divider: {
    height: '32px',
    backgroundColor: '#20262e',
  },
  header: {
    textAlign: 'center',
    color: '#ddd',
  },
});

const WorkspaceComponent = (props) => {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <div className={classes.toolbar} />
      <Files />
      <div className={classes.divider}>
        <Typography variant="h6" noWrap className={classes.header}>Console</Typography>
      </div>
      <Terminal />
    </main>
  );
};

WorkspaceComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkspaceComponent);
