import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import BugReportIcon from '@material-ui/icons/BugReport';
import SubjectIcon from '@material-ui/icons/Subject';
import DetailsIcon from '@material-ui/icons/Details';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


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
    meta: true,
    other: false,
    tutorial: false,
  }

  handleTutorialClick = () => {
    this.setState(state => ({ tutorial: !state.tutorial }));
  };

  handleMetaClick = () => {
    this.setState(state => ({ meta: !state.meta }));
  };

  handleOtherClick = () => {
    this.setState(state => ({ other: !state.other }));
  };

  render() {
    const { classes, handleTitleChange, handleDescriptionChange, title, description } = this.props;
    const { meta, other, tutorial } = this.state;

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
          <ListItem button className={classes.expand} onClick={this.handleMetaClick}>
            <ListItemIcon>
              <SubjectIcon />
            </ListItemIcon>
            <ListItemText inset primary="Snippet meta" />
            {meta ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={meta} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem classes={{
                root: classes.title,
              }}
              >
                <TextField
                  id="title-text"
                  label="Title"
                  className={classes.textField}
                  value={title}
                  onChange={handleTitleChange}
                  margin="normal"
                  color="inherit"
                  variant="outlined"
                />
              </ListItem>
              <ListItem classes={{
                root: classes.desc,
              }}
              >
                <TextField
                  id="description-text"
                  label="Description"
                  placeholder="Enter a short description"
                  multiline
                  className={classes.textField}
                  value={description}
                  onChange={handleDescriptionChange}
                  margin="normal"
                  rows={4}
                  color="inherit"
                  variant="outlined"
                />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button className={classes.expand} onClick={this.handleTutorialClick}>
            <ListItemIcon>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText inset primary="Tutorial" />
            {tutorial ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={tutorial} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListSubheader
                component="div"
                classes={{
                  root: classes.subheader,
                }}
              >
              Getting Started
              </ListSubheader>
              <ListItem
                classes={{
                  root: classes.paragraph,
                }}
              >
                <ListItemText
                  classes={{
                    primary: classes.license,
                  }}
                  primary="Copy and paste your snippets of code into the file editor on the right and your console output, if appropriate, into the console below. Press Save above to generate a unique shortlink, which you can share or keep for reference."
                />
              </ListItem>
              <ListSubheader
                component="div"
                classes={{
                  root: classes.subheader,
                }}
              >
              Usage
              </ListSubheader>
              <ListItem
                classes={{
                  root: classes.paragraph,
                }}
              >
                <ListItemText
                  classes={{
                    primary: classes.license,
                  }}
                  primary="Whenever you or a collaborator makes any edits, press Update above to generate a new versioned shortlink that displays the difference in a pull request format."
                />
              </ListItem>
            </List>
          </Collapse>

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
  handleDescriptionChange: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default withStyles(styles)(SidebarComponent);
