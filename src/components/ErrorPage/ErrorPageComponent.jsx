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

function ErrorPageComponent(props) {
  const { classes, message } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom className={classes.message}>
        { message }
      </Typography>
    </div>
  );
}

ErrorPageComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};


export default withStyles(styles)(ErrorPageComponent);
