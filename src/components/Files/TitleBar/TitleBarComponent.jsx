import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  divider: {
    height: '48px',
  },
});

const TitleBarComponent = (props) => {
  const { classes } = props;
  return (
    <div className={classes.divider}>
      <TextField
        id="standard-with-placeholder"
        label="With placeholder"
        placeholder="Placeholder"
        className={classes.textField}
        margin="normal"
      />
    </div>
  );
};

TitleBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitleBarComponent);
