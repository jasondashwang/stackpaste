import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});


class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Stackpaste
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

NavbarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarComponent);
