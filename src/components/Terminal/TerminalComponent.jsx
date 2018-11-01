import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MonacoEditor from 'react-monaco-editor';

const styles = theme => ({
  wrapper: {
    height: '40%',
    width: '100%',
  },
});

class TerminalComponent extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <MonacoEditor
          options={{
            automaticLayout: true,
          }}
        />
      </div>
    );
  }
}

TerminalComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TerminalComponent);
