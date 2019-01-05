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
    height: 'calc(63% - 34px)',
  },
  scroller: {
    'overflow-x': 'hidden',
  },
  bar: {
    boxShadow: 'none',
  },
});

class FilesComponent extends React.Component {
  handleTabClick = (evt, index) => {
    const { createFile, focusFile, files } = this.props;
    if (index === files.ids.length) {
      createFile();
    } else {
      focusFile(index);
    }
  }

  render() {
    const { classes, files, deleteFile } = this.props;
    const fileTitles = files.ids.map(id => files[id].title);
    const file = files[files.ids[files.focusIndex]];
    return (
      <div className={classes.wrapper}>
        <AppBar
          position="static"
          color="default"
          className={classes.bar}
        >
          <Tabs
            onChange={this.handleTabClick}
            value={files.focusIndex}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="on"
            classes={{
              scroller: classes.scroller,
            }}
          >
            {
              fileTitles.map((title, i) => <Tab key={i} label={title} />)
            }
            <Tab icon={<AddIcon />} />
          </Tabs>
        </AppBar>
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
