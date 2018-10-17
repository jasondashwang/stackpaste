import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar/NavbarContainer';
import Workspace from '../Workspace/WorkspaceContainer';
import Sidebar from '../Sidebar/SidebarContainer';
import history from '../../history';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

class AppComponent extends React.Component {

  componentDidMount () {
    this.props.getPaste();
  }

  componentWillMount() {
    this.unlisten = history.listen((location, action) => {
      this.props.getPaste();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="appFrame">
        <Navbar />
        <Sidebar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Workspace />
        </main>
      </div>
    );
  }
};

AppComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};


export default withStyles(styles)(AppComponent);
