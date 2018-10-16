import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
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
});


class SidebarComponent extends React.Component {
  render() {
    const { classes, handleTitleChange, handleDescriptionChange, title, description } = this.props;

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
              onChange={handleTitleChange}
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
              onChange={handleDescriptionChange}
              margin="normal"
              rows={4}
            />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

SidebarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(SidebarComponent);
