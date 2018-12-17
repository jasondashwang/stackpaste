import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MonacoEditor, { MonacoDiffEditor } from 'react-monaco-editor';

const styles = theme => ({
  wrapper: {
    height: 'calc(90% - 1px)',
    width: '100%',
    borderBottom: '1px solid #cfd0d2',
  },
});

const editorWillMount = (monaco) => {
  // monaco.editor.defineTheme('myTheme', {
  //   base: 'vs',
  //   inherit: true,
  // });
  // monaco.editor.setTheme('myTheme');
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
    const { classes, file, version, rootFiles } = this.props;
    let originalBody = '';
    if (file.rootId && file.rootId !== '' && rootFiles[file.rootId]) {
      originalBody = rootFiles[file.rootId].body;
    }

    return (
      <div className={classes.wrapper}>
        {
          version === 0
            ? (
              <MonacoEditor
                options={{
                  automaticLayout: true,
                  value: 'Paste code snippet here'
                }}
                value={file.body}
                editorDidMount={editorDidMount}
                editorWillMount={editorWillMount}
                onChange={this.handleChange}
              />
            )
            : (
              <MonacoDiffEditor
                options={{
                  automaticLayout: true,
                }}
                original={originalBody}
                value={file.body}
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
};

export default withStyles(styles)(CodeEditorComponent);
