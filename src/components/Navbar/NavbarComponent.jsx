import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
                <Button color="primary" className={classes.button} onClick={this.update}>
                  Update
                </Button>
              )
              :
              (
                <Button color="primary" className={classes.button} onClick={this.save}>
                  Save
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
