import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DescriptionIcon from '@material-ui/icons/Description';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import NotifcationIcon from '@material-ui/icons/FiberManualRecord';
import Tooltip from '@material-ui/core/Tooltip';

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
  button: {
    color: '#cfd0d2',
    '&&&&:hover': {
      color: '#0084ff',
    },
  },
  active: {
    backgroundColor: '#1c2128',
    borderLeft: '2px solid #0084ff',
    paddingLeft: '30px',
  },
});


class SidebarComponent extends React.Component {
  state = {
    open: true,
  }

  handleCreate = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, files, createFile, focusFile } = this.props;
    const fileTitles = files.ids.map(id => ({ title: files[id].title, id }));
    const { focusIndex } = files;
    const { open } = this.state;

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
          <ListItem button onClick={this.handleCreate} classes={{ divider: classes.divider }}>
            <ListItemIcon>
              { open ? <FolderOpenIcon /> : <FolderIcon /> }
            </ListItemIcon>
            <ListItemText
              primary="Files"
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" className={classes.button} onClick={createFile}>
                <Tooltip title="New File" placement="bottom">
                  <NoteAddIcon />
                </Tooltip>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {
              fileTitles.map((titleObj, i) => {
                const { id, title } = titleObj;
                return (
                  <ListItem dense key={id} button className={classNames(classes.nested, focusIndex === i ? classes.active : null)} onClick={() => { focusFile(i); }}>
                    <ListItemIcon>
                      <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={title.length > 16 ? `${title.slice(0, 16)}...` : title}
                    />
                  </ListItem>
                );
              })
            }

          </Collapse>
        </List>
      </Drawer>
    );
  }
}

SidebarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  files: PropTypes.object.isRequired,
  focusFile: PropTypes.func.isRequired,
  createFile: PropTypes.func.isRequired,
};

export default withStyles(styles)(SidebarComponent);
