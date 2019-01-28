import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CodeIcon from '@material-ui/icons/Code';
import LinearProgress from '@material-ui/core/LinearProgress';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

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
  logo: {
    height: '45px',
    width: '45px',
    verticalAlign: 'middle',
    color: '#0084ff',
  },
  grow: {
    display: 'flex',
    flexGrow: 1,
  },
  errorBarColorPrimary: {
    backgroundColor: '#f50057',
  },
});


class NavbarComponent extends React.Component {
  state = {
    inProgress: false,
    error: false,
    completed: 0,
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      clearInterval(this.timer);
      setTimeout(() => {
        this.setState({ inProgress: false });
      }, 500);
    } else {
      const diff = Math.random() * 10;
      // it has to be manually set to 100 for "completetion"
      this.setState({ completed: Math.min(completed + diff, 99) });
    }
  }

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
      this.setState({
        inProgress: true,
        completed: 0,
      });
      this.timer = setInterval(this.progress, 500);
      createPaste()
        .then(() => {
          this.setState({
            completed: 100,
          });
        })
        .catch((err) => {
          this.setState({
            completed: 0,
            inProgress: false,
            error: true,
          });

          setTimeout(() => {
            this.setState({
              error: false,
            });
          }, 5000);

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
      this.setState({
        inProgress: true,
        completed: 0,
      });
      this.timer = setInterval(this.progress, 500);
      createVersion()
        .then(() => {
          this.setState({
            completed: 100,
          });
        })
        .catch((err) => {
          this.setState({
            completed: 0,
            inProgress: false,
            error: true,
          });

          setTimeout(() => {
            this.setState({
              error: false,
            });
          }, 5000);

          enqueueSnackbar('An error occurred while updating. Please try again later.', { variant: 'error' });
        });
    } else {
      enqueueSnackbar(message, { variant: 'error' });
    }
  }

  render() {
    const { classes, short, reset, toggleTutorial } = this.props;
    const { inProgress, completed, error } = this.state;
    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Link to="/" onClick={reset} className={classes.titleLink}>
              <CodeIcon className={classes.logo} />
              &nbsp;
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
          <div className={classes.grow} />
          <IconButton
            className={classes.button}
            color="inherit"
            classes={{
              root: classes.buttonRoot,
            }}
            onClick={toggleTutorial}
          >
            <HelpOutlineIcon />
          </IconButton>
          <IconButton
            className={classes.button}
            color="inherit"
            classes={{
              root: classes.buttonRoot,
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
        { inProgress ? <LinearProgress variant="determinate" value={completed} color="secondary" /> : null }
        { error ? <LinearProgress variant="determinate" value={100} classes={{
          barColorPrimary: classes.errorBarColorPrimary,
        }} /> : null }
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
  toggleTutorial: PropTypes.func.isRequired,
};

export default withStyles(styles)(withSnackbar(NavbarComponent));
