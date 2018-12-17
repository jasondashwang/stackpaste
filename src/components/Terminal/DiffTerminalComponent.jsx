import React from 'react';
import PropTypes from 'prop-types';
import { MonacoDiffEditor } from 'react-monaco-editor';

function DiffTerminalComponent(props) {
  const { body, rootBody } = props;

  return (
    <MonacoDiffEditor
      original={rootBody}
      value={body}
      options={{
        automaticLayout: true,
      }}
      language="text"
    />
  );
}

DiffTerminalComponent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default DiffTerminalComponent;
