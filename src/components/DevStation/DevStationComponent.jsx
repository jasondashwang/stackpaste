import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Terminal from '../Terminal/TerminalContainer';
import MonacoEditor from 'react-monaco-editor';

const styles = theme => ({
  wrapper: {
    height: '1000px',
    width: '1000px',
  },
});

class DevStationComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <MonacoEditor />
      </div>

    );
  }
};

DevStationComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DevStationComponent);
