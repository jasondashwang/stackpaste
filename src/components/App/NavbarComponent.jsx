import React from 'react';

import { withStyles } from 'material-ui/styles';

const styles = () => ({
  navbar: {
    position: 'absolute',
    backgroundColor: 'red',
  },
});

const NavbarComponent = (props) => {
  return (
    <div className="navbar">Hi Jonathan</div>
  );
};

export default withStyles(styles)(NavbarComponent);
