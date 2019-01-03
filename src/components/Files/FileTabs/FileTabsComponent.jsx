import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import languages from './languages';

const styles = theme => ({
  wrapper: {
    flexGrow: 1,
    justifyContent: 'left',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.paper,
    height: '10%',
  },
  button: {
    margin: theme.spacing.unit,
  },
  chip: {
    borderRadius: '10px 10px 0px 0px',
    height: '85%',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  activeChip: {
    backgroundColor: 'rgb(206, 206, 206)',
  },
  title: {
    marginTop: '1em',
    marginBottom: '1em',
    fontSize: '1em',
  },
  bar: {
    height: '15%',
    width: '100%',
  },
});

class EditTitleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
    };
  }

  changeMode = () => {
    const newMode = !this.state.edit;

    this.setState({
      edit: newMode,
    });
  }

  render() {
    const { title, id, handleChange, classes } = this.props;
    const { edit } = this.state;

    if (edit) {
      return (
        <span>
          <input
            value={title}
            onChange={(evt) => { handleChange(id, evt.target.value); }}
          />
          <IconButton color="inherit" component="span" onClick={this.changeMode}><DoneIcon /></IconButton>
        </span>
      );
    }
    return (
      <span className={classes.title}>
        <span>{ title }</span>
        <IconButton color="inherit" component="span" onClick={this.changeMode}><EditIcon /></IconButton>
      </span>
    );
  }
}

EditTitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const EditTitle = withStyles(styles)(EditTitleComponent);

const FileTabsComponent = (props) => {
  const { classes, files, updateTitle, createFile, focusFile, deleteFile } = props;

  const { focusIndex, ids } = files;
  return (
    <div className={classes.wrapper}>
      <div className={classes.bar} />
      {
        ids.map((id, index) => {
          const title = files[id].title;
          return (
            <Chip
              key={id}
              className={classNames(classes.chip, {
                [classes.activeChip]: index === focusIndex,
              })}
              onClick={() => { focusFile(index); }}
              onDelete={() => { deleteFile(index); }}
              label={(<EditTitle title={title} id={id} handleChange={updateTitle} />)}
            />);
        })
      }
      <Chip
        icon={<AddIcon />}
        label="New File"
        onClick={createFile}
        className={classes.chip}
      />
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
