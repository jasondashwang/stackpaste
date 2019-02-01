import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import CodeEditor from './CodeEditor/CodeEditorContainer';
import TitleBar from './TitleBar/TitleBarContainer';

const styles = theme => ({
  wrapper: {
    flexGrow: 1,
    width: '100%',
    height: 'calc(63% - 33px)',
  },
  add: {
    color: '#0084ff',
  },
});

class FilesComponent extends React.Component {
  render() {
    const { classes, files, deleteFile } = this.props;
    const file = files[files.ids[files.focusIndex]];
    return (
      <div className={classes.wrapper}>
        <TitleBar file={file} />
        <CodeEditor file={file} />
      </div>
    );
  }
}

FilesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  files: PropTypes.object.isRequired,
  focusFile: PropTypes.func.isRequired,
  createFile: PropTypes.func.isRequired,
};

export default withStyles(styles)(FilesComponent);
