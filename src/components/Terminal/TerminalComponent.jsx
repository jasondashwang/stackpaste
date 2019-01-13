import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MonacoEditor from 'react-monaco-editor';

import DiffTerminal from './DiffTerminalComponent';

const styles = theme => ({
  wrapper: {
    height: 'calc(37% - 64px)',
    width: '100%',
  },
  editor: {
    maxHeight: '100%',
  },
});

class TerminalComponent extends React.Component {

  render() {
    const { classes, body, updateBody, root, rootBody } = this.props;

    return (
      <div className={classes.wrapper}>
        {
          !root ? (
            <MonacoEditor
              value={body}
              onChange={updateBody}
              options={{
                automaticLayout: true,
                wordWrap: 'on',
                // Set this to false to not auto word wrap minified files
                wordWrapMinified: true,
              }}
              language="text"
              classes={{
                container: {
                  maxHeight: '100%',
                }
              }}
            />
          ) : (
            <DiffTerminal
              rootBody={rootBody}
              body={body}
              updateBody={updateBody}
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
  root: PropTypes.string.isRequired,
  rootBody: PropTypes.string.isRequired,
};

export default withStyles(styles)(TerminalComponent);
