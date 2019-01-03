import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CodeEditor from './CodeEditor/CodeEditorContainer';
import FileTabs from './FileTabs/FileTabsContainer';
import TitleBar from './TitleBar/TitleBarContainer';

const styles = theme => ({
  wrapper: {
    flexGrow: 1,
    width: '100%',
    height: 'calc(63% - 34px)',
  },
});

const FilesComponent = (props) => {
  const { classes, files, version } = props;
  const file = files[files.ids[files.focusIndex]];
  return (
    <div className={classes.wrapper}>
      <FileTabs files={files} />
      <TitleBar file={file} />
      <CodeEditor file={file} />
    </div>
  );
};

FilesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  files: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilesComponent);
