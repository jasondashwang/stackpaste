import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CodeEditor from './CodeEditor/CodeEditorContainer';
import FileTabs from './FileTabs/FileTabsContainer';

const styles = theme => ({
  wrapper: {
    flexGrow: 1,
    width: '100%',
    height: '60%',
  },
});

const FilesComponent = (props) => {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <FileTabs />
      <CodeEditor />
    </div>
  );
};

FilesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilesComponent);
