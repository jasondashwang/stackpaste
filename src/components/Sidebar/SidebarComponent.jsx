import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
/*
*
*     IMPORTS FOR THE PLACEHOLDERS
*
*/

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },

  toolbar: theme.mixins.toolbar,
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});


class SidebarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Untitled',
      description: '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.saveSideBar = this.saveSideBar.bind(this);
  }

  handleTitleChange(evt) {
    const newTitle = evt.target.value;

    this.setState({
      title: newTitle,
    });
  }

  handleDescriptionChange(evt) {
    const newDescription = evt.target.value;

    this.setState({
      description: newDescription,
    });
  }

  saveSideBar() {
    this.props.saveMeta(this.state.title, this.state.description);
  }

  render() {
    const { classes } = this.props;
    const { title, description } = this.state;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem>
            <TextField
              id="title-text"
              label="Title"
              className={classes.textField}
              value={title}
              onChange={this.handleTitleChange}
              margin="normal"
            />
          </ListItem>
          <ListItem>
            <TextField
              id="description-text"
              label="Description"
              placeholder="Enter a short description"
              multiline
              className={classes.textField}
              value={description}
              onChange={this.handleDescriptionChange}
              margin="normal"
              rows={4}
            />
          </ListItem>
          <Button variant="contained" size="small" className={classes.button} onClick={this.saveSideBar}>
            <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
            Save
          </Button>
        </List>
      </Drawer>
    );
  }
}

SidebarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  saveMeta: PropTypes.func.isRequired,
};

export default withStyles(styles)(SidebarComponent);
