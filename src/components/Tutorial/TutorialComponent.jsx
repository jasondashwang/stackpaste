import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';

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
          <DialogTitle>
            Getting Started
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Copy and paste your snippets of code into the file editor on the right and your console output, if appropriate, into the console below. Press Save above to generate a unique shortlink, which you can share or keep for reference.
            </DialogContentText>
          </DialogContent>

          <DialogTitle>
            Usage
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Whenever you or a collaborator makes any edits, press Update above to generate a new versioned shortlink that displays the difference in a pull request format.
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
