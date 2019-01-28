import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import BugReportIcon from '@material-ui/icons/BugReport';
import DetailsIcon from '@material-ui/icons/Details';


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
  link: {
    color: '#0084ff',
  },
  license: {
    fontSize: '13px',
  },
  expand: {
    backgroundColor: '#1c2128',
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
          <ListItem button className={classes.expand} onClick={this.handleOtherClick}>
            <ListItemIcon>
              <DetailsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Other" />
            {other ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={other} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText
                  classes={{
                    primary: classes.license,
                  }}
                  primary="All code belongs to the poster and no license is enforced. stackpaste or its team are not responsible or liable for any loss or damage of any kind during the usage of provided code."
                />
              </ListItem>
              <ListSubheader
                component="div"
                classes={{
                  root: classes.linkheader,
                }}
              >
              Links
              </ListSubheader>
              <ListItem button component="a" href="https://github.com/jasonwang67/stackpaste/issues" target="_blank" className={classes.nested}>
                <ListItemIcon>
                  <BugReportIcon className={classes.link} />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.link,
                  }}
                  inset
                  primary="Report a bug"
                />
              </ListItem>
            </List>
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
