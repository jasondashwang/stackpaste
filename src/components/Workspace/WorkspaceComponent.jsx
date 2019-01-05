import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Files from '../Files/FilesContainer';
import Terminal from '../Terminal/TerminalContainer';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    maxWidth: 'calc(100% - 241px)',
  },
  toolbar: theme.mixins.toolbar,
  divider: {
    height: '32px',
    backgroundColor: '#f5f5f5',
  },
  header: {
    textAlign: 'center',
  },
});

const WorkspaceComponent = (props) => {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <div className={classes.toolbar} />
      <Files />
      <div className={classes.divider}>
        <Typography variant="h6" color="inherit" noWrap className={classes.header}>Terminal Output</Typography>
      </div>
      <Terminal />
    </main>
  );
};

WorkspaceComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkspaceComponent);
