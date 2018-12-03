import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
  },
  button: {
    margin: theme.spacing.unit,
    color: '#ffffff',
  },
  titleLink: {
    color: '#ffffff',
    textDecoration: 'none',
  },
});


class NavbarComponent extends React.Component {
  save = () => {
    this.props.createPaste();
  }

  update = () => {
    this.props.createVersion();
  }

  render() {
    const { classes, short } = this.props;
    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="headline" color="inherit" noWrap>
            <Link to="/" className={classes.titleLink}>stackpaste</Link>
          </Typography>
          {
            short ?
              (
                <Button color="inherit" className={classes.button} onClick={this.update}>
                  <CloudUploadIcon />	 &nbsp; Update
                </Button>
              )
              :
              (
                <Button color="inherit" className={classes.button} onClick={this.save}>
                  <CloudUploadIcon />	 &nbsp; Save
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
  createPaste: PropTypes.func.isRequired,
  createVersion: PropTypes.func.isRequired,
  short: PropTypes.string.isRequired,
};

export default withStyles(styles)(NavbarComponent);
