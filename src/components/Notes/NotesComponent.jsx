import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MonacoEditor from 'react-monaco-editor';

const styles = theme => ({
  wrapper: {
    height: 'calc(37% - 64px)',
    width: '100%',
  },
  editor: {
    maxHeight: '100%',
  },
});

class NotesComponent extends React.Component {

  render() {
    const { classes, body, updateBody } = this.props;

    return (
      <div className={classes.wrapper}>
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
      </div>
    );
  }
}

NotesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  updateBody: PropTypes.func.isRequired,
};

export default withStyles(styles)(NotesComponent);
