import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
    backgroundColor: '#1c2128',
  },
  button: {
    margin: theme.spacing.unit,
    color: '#cfd0d2',
  },
  titleLink: {
    color: '#cfd0d2',
    textDecoration: 'none',
  },
  buttonRoot: {
    '&:hover': {
      color: '#0084ff',
    },
  },
});


class NavbarComponent extends React.Component {
  validatePayload = () => {
    const { files } = this.props;
    let errorMessage = '';
    files.ids.forEach((id) => {
      const file = files[id];
      if (file.title.length === 0) {
        errorMessage = 'File titles are required. Please fix above before trying again.';
      }
    });
    return errorMessage;
  }

  handleSave = () => {
    const { createPaste, enqueueSnackbar } = this.props;
    const message = this.validatePayload();
    // if messsage is empty string
    if (!message) {
      createPaste()
        .catch((err) => {
          enqueueSnackbar('An error occurred while saving. Please try again later.', { variant: 'error' });
        });
    } else {
      enqueueSnackbar(message, { variant: 'error' });
    }
  }

  handleUpdate = () => {
    const { createVersion, enqueueSnackbar } = this.props;
    const message = this.validatePayload();
    // if messsage is empty string
    if (!message) {
      createVersion()
        .catch((err) => {
          enqueueSnackbar('An error occurred while updating. Please try again later.', { variant: 'error' });
        });
    } else {
      enqueueSnackbar(message, { variant: 'error' });
    }
  }

  render() {
    const { classes, short, reset } = this.props;
    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" color="inherit" noWrap>
            <Link to="/" onClick={reset} className={classes.titleLink}>
              stackpaste
              &nbsp; {process.env.NODE_ENV === 'development' ? process.env.NODE_ENV : '' }
            </Link>
          </Typography>
          {
            short ? (
              <Button
                color="inherit"
                className={classes.button}
                onClick={this.handleUpdate}
                classes={{
                  root: classes.buttonRoot,
                }}
              >
                <CloudUploadIcon />
                &nbsp; Update
              </Button>
            )
              : (
                <Button
                  color="inherit"
                  className={classes.button}
                  onClick={this.handleSave}
                  classes={{
                    root: classes.buttonRoot,
                  }}
                >
                  <CloudUploadIcon />
                  &nbsp; Save
                </Button>
              )
          }

        </Toolbar>
      </AppBar>
    );
  }
}

NavbarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  files: PropTypes.object.isRequired,
  createPaste: PropTypes.func.isRequired,
  createVersion: PropTypes.func.isRequired,
  short: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
};

export default withStyles(styles)(withSnackbar(NavbarComponent));
