import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  divider: {
    height: '48px',
    padding: '1em',
  },
  textField: {

  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class TitleBarComponent extends React.Component {
  handleChange = (evt) => {
    const { file, updateTitle } = this.props;

    updateTitle(file._id, evt.target.value);
  }

  handleDelete = () => {
    const { file, deleteFile } = this.props;

    deleteFile(file._id);
  }

  render() {
    const { classes, file } = this.props;
    return (
      <div className={classes.divider}>
        <TextField
          placeholder="Filename"
          className={classes.textField}
          value={file.title}
          onChange={this.handleChange}
        />
        <IconButton aria-label="Delete" onClick={this.handleDelete} className={classes.margin}>
          <DeleteIcon />
        </IconButton>
      </div>
    );
  }
}

TitleBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  file: PropTypes.object.isRequired,
  updateTitle: PropTypes.func.isRequired,
  deleteFile: PropTypes.func.isRequired,
};

export default withStyles(styles)(TitleBarComponent);
