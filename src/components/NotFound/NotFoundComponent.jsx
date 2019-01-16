import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'table',
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: '#20262e',
  },
  message: {
    display: 'table-cell',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#cfd0d2',
  },
});

function NotFoundComponent(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom className={classes.message}>
        This page does not exist.
      </Typography>
    </div>
  );
}

NotFoundComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(NotFoundComponent);
