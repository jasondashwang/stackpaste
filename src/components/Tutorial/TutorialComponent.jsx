import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class TutorialComponent extends React.Component {
  render() {
    const { open, toggle } = this.props;

    return (
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={toggle}
        >
          <DialogContent>
            <Typography variant="h6">
              Getting Started
            </Typography>
            <DialogContentText>
              Copy and paste your snippets of code into the main code editor, creating additional files as necessary. Press Save above to generate a unique shortlink, which you can share or keep for reference.
            </DialogContentText>

            <br />

            <Typography variant="h6">
              Usage
            </Typography>
            <DialogContentText>
              Whenever you or a collaborator makes any edits, press Update above to generate a new versioned shortlink that displays the difference in a pull request format.
            </DialogContentText>

            <br />

            <Typography variant="h6">
              License
            </Typography>
            <DialogContentText>
              All code belongs to the poster and no license is enforced. stackpaste or its team are not responsible or liable for any loss or damage of any kind during the usage of provided code.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={toggle} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

TutorialComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default TutorialComponent;
