import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MonacoEditor from 'react-monaco-editor';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';

const styles = theme => ({
  wrapper: {
    float: 'left',
    height: 'calc(100% - 64px)',
    width: '30%',
  },
  bar: {
    borderBottom: '1px solid #2d333b',
    height: '48px',
    padding: '8px',
    backgroundColor: '#20262e',
  },
  header: {
    textAlign: 'center',
    color: '#cfd0d2',
    padding: '10px',
  },
  notepadIcon: {
    verticalAlign: 'middle',
  },
  notepad: {
    height: 'calc(100% - 129px)',
  },
});

class NotesComponent extends React.Component {

  render() {
    const { classes, body, updateBody } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.bar}>
          <Typography variant="h5" noWrap className={classes.header}>
            <AssignmentIcon className={classes.notepadIcon} />
            &nbsp; Notepad
          </Typography>
        </div>
        <div className={classes.notepad}>
          <MonacoEditor
            value={body}
            onChange={updateBody}
            options={{
              automaticLayout: true,
              wordWrap: 'on',
              // Set this to false to not auto word wrap minified files
              wordWrapMinified: true,
              lineNumbers: false,
              suggest: false,
              suggestOnTriggerCharacters: false,
              wordBasedSuggestions: false,
            }}
            language="text"
          />
        </div>
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
