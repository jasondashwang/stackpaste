import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MonacoEditor, { MonacoDiffEditor } from 'react-monaco-editor';
import darkTheme from '../../../utils/darkMonacoTheme.json';

const styles = theme => ({
  wrapper: {
    height: 'calc(100% - 65px)',
    width: '100%',
  },
});

const editorWillMount = (monaco) => {
  monaco.editor.defineTheme('dark', darkTheme);
  monaco.editor.setTheme('dark');
};

const editorDidMount = (editor, monaco) => {
  editor.focus();
};

class CodeEditorComponent extends React.Component {
  handleChange = (body) => {
    const { file, updateBody } = this.props;
    updateBody(file._id, body);
  }

  render() {
    const { classes, file, version, rootFiles, diff } = this.props;
    let originalBody = '';
    if (file.root && file.root !== '' && rootFiles[file.root]) {
      originalBody = rootFiles[file.root].body;
    }

    return (
      <div className={classes.wrapper}>
        {
          file.root && diff // If the file's root does not exist
            ? (
              <MonacoDiffEditor
                language={file.syntax}
                options={{
                  automaticLayout: true,
                  wordWrap: 'on',
                  // Set this to false to not auto word wrap minified files
                  wordWrapMinified: true,
                }}
                original={originalBody}
                value={file.body}
                editorWillMount={editorWillMount}
                onChange={this.handleChange}
              />
            )
            : (
              <MonacoEditor
                options={{
                  automaticLayout: true,
                  wordWrap: 'on',
                  // Set this to false to not auto word wrap minified files
                  wordWrapMinified: true,
                }}
                language={file.syntax}
                value={file.body}
                editorDidMount={editorDidMount}
                editorWillMount={editorWillMount}
                onChange={this.handleChange}
              />
            )

        }

      </div>
    );
  }
}

CodeEditorComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  file: PropTypes.object.isRequired,
  updateBody: PropTypes.func.isRequired,
  version: PropTypes.number.isRequired,
  rootFiles: PropTypes.object.isRequired,
  diff: PropTypes.bool.isRequired,
};

export default withStyles(styles)(CodeEditorComponent);
