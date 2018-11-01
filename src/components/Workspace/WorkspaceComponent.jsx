import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CodeEditor from '../CodeEditor/CodeEditorContainer';
import Terminal from '../Terminal/TerminalContainer';

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: theme.mixins.toolbar,
});

const WorkspaceComponent = (props) => {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <div className={classes.toolbar} />
      <CodeEditor />
      <Terminal />
    </main>
  );
};

WorkspaceComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkspaceComponent);
