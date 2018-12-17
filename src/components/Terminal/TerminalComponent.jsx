import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MonacoEditor from 'react-monaco-editor';

import DiffTerminal from './DiffTerminalComponent';

const styles = theme => ({
  wrapper: {
    height: '37%',
    width: '100%',
    borderTop: '1px solid #cfd0d2',
  },
});

class TerminalComponent extends React.Component {

  render() {
    const { classes, body, updateBody, version, rootBody } = this.props;

    return (
      <div className={classes.wrapper}>
        {
          version === 0 ? (
            <MonacoEditor
              value={body}
              onChange={updateBody}
              options={{
                automaticLayout: true,
              }}
              language="text"
            />
          ) : (
            <DiffTerminal
              rootBody={rootBody}
              body={body}
            />
          )
        }

      </div>
    );
  }
}

TerminalComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  updateBody: PropTypes.func.isRequired,
  version: PropTypes.number.isRequired,
  rootBody: PropTypes.string.isRequired,
};

export default withStyles(styles)(TerminalComponent);
