import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CreateFolderIcon from '@material-ui/icons/CreateNewFolder';
import DescriptionIcon from '@material-ui/icons/Description';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    height: '100%',
    width: drawerWidth,
    borderRight: '1px solid #2d333b',
  },
  divider: {
    borderBottom: '1px solid #2d333b',
  },
  toolbar: theme.mixins.toolbar,
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    paddingTop: '5px',
    paddingBottom: '5px',
    fontSize: '12px',
  },
  license: {
    fontSize: '13px',
  },
  list: {
    paddingTop: '0px',
  },
  title: {
    paddingTop: '0px',
    paddingBottom: '0px',
  },
  desc: {
    paddingTop: '0px',
    paddingBottom: '8px',
  },
  linkheader: {
    lineHeight: '24px',
  },
  paragraph: {
    paddingTop: '0px',
  },
});


class SidebarComponent extends React.Component {
  state = {
    other: false,
  }

  handleOtherClick = () => {
    this.setState(state => ({ other: !state.other }));
  };

  render() {
    const { classes } = this.props;
    const { other } = this.state;

    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List className={classes.list}>
          <ListItem button classes={{ divider: classes.divider }} divider>
            <ListItemIcon>
              <CreateFolderIcon />
            </ListItemIcon>
            <ListItemText
              primary="Create new folder"
            />
          </ListItem>
          <ListItem button onClick={this.handleOtherClick}>
            <ListItemIcon>
              { other ? <FolderOpenIcon /> : <FolderIcon /> }
            </ListItemIcon>
            <ListItemText inset primary="Some Folder" />
            {other ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={other} timeout="auto" unmountOnExit>
            <ListItem button>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText
                primary="Filename"
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Collapse>
        </List>
      </Drawer>
    );
  }
}

SidebarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SidebarComponent);
