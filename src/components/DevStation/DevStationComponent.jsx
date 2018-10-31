import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Terminal from '../Terminal/TerminalContainer';
import MonacoEditor from 'react-monaco-editor';

const styles = theme => ({
  wrapper: {
    height: '100vh',
    width: '50vw',
  },
  editor: {
    height: '70vh',
  },
  terminal: {
    height: '30vh',
  },
});

class DevStationComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.editor}>
          <MonacoEditor />
        </div>
        <div className={classes.terminal}>
          <Terminal />
        </div>
      </div>

    );
  }
}

DevStationComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DevStationComponent);
