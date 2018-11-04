import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  wrapper: {
    flexGrow: 1,
    justifyContent: 'left',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit,
  },
  chip: {
    borderRadius: '0px',
  },
  activeChip: {
    borderRadius: '0px',
    backgroundColor: 'rgb(101, 115, 195)',
  },
});

const EditTitle = (props) => {
  const { title, fid, handleChange } = props;
  return (
    <input
      value={title}
      onChange={(evt) => { handleChange(fid, evt.target.value); }}
    />
  );
};

EditTitle.propTypes = {
  title: PropTypes.string.isRequired,
  fid: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const FileTabsComponent = (props) => {
  const { classes, files, updateTitle, createFile, focusFile, deleteFile } = props;

  const { focusFid, fids } = files;
  return (
    <div className={classes.root}>
      <Paper className={classes.wrapper}>
        {
          fids.map((fid) => {
            const title = files[fid].title;
            return (
              <Chip
                color="primary"
                key={fid}
                className={ focusFid === fid ? classes.activeChip : classes.chip}
                onClick={() => { focusFile(fid); }}
                onDelete={() => { deleteFile(fid); }}
                label={(<EditTitle title={title} fid={fid} handleChange={updateTitle} />)}
              />);
          })
        }
        <Chip
          icon={<AddIcon />}
          label="Add File"
          onClick={createFile}
          className={classes.chip}
        />
      </Paper>
    </div>
  );
};

FileTabsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  files: PropTypes.object.isRequired,
  updateTitle: PropTypes.func.isRequired,
  createFile: PropTypes.func.isRequired,
  focusFile: PropTypes.func.isRequired,
  deleteFile: PropTypes.func.isRequired,
};

export default withStyles(styles)(FileTabsComponent);
