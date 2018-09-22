import React from 'react';

import { withStyles } from 'material-ui/styles';

const styles = theme => {
  navbar: {
    position: 'absolulte',
    backgroundColor: '#2196F3'
  }
}

const NavbarComponent = (props) => {
  return (
    <div className="navbar">Hi Jonathan</div>
  );
};

export default withStyles(styles)(NavbarComponent);
