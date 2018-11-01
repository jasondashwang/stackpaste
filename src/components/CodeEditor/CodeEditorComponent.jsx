import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MonacoEditor from 'react-monaco-editor';

const styles = theme => ({
  wrapper: {
    height: 'calc(60% - 1px)',
    width: '100%',
    borderBottom: '1px solid #cfd0d2',
  },
});

class CodeEditorComponent extends React.Component {
  editorWillMount (monaco) {
    monaco.editor.defineTheme('myTheme', {
        base: 'vs',
        inherit: true,
        rules: [{ background: '#20262e' }],
    });
    monaco.editor.setTheme('myTheme');
  }

  editorDidMount (editor, monaco) {
    editor.focus();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <MonacoEditor
          options={{
            automaticLayout: true,
          }}
          editorDidMount={this.editorDidMount}
          editorWillMount={this.editorWillMount}
        />
      </div>
    );
  }
}

CodeEditorComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CodeEditorComponent);
