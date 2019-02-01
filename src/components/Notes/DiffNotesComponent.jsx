import React from 'react';
import PropTypes from 'prop-types';
import { MonacoDiffEditor } from 'react-monaco-editor';

function DiffNotesComponent(props) {
  const { body, rootBody, updateBody } = props;

  return (
    <MonacoDiffEditor
      original={rootBody}
      value={body}
      options={{
        automaticLayout: true,
        wordWrap: 'on',
        // Set this to false to not auto word wrap minified files
        wordWrapMinified: true,
      }}
      language="text"
      onChange={updateBody}
    />
  );
}

DiffNotesComponent.propTypes = {
  body: PropTypes.string.isRequired,
  rootBody: PropTypes.string.isRequired,
  updateBody: PropTypes.func.isRequired,
};

export default DiffNotesComponent;
