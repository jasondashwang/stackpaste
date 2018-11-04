import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar/NavbarContainer';
import Workspace from '../Workspace/WorkspaceContainer';
import Sidebar from '../Sidebar/SidebarContainer';

import { normalize, schema } from 'normalizr';
const styles = theme => ({
  root: {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    height: '100%',
  },
});

class AppComponent extends React.Component {
  componentDidMount() {
    this.props.getPaste();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Navbar />
        <Sidebar />
        <Workspace />
      </div>
    );
  }
}

AppComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  getPaste: PropTypes.func.isRequired,
};


export default withStyles(styles)(AppComponent);
