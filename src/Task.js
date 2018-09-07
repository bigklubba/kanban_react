import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

class Task extends Component {
  state = {
    anchorEl: null,
    index: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
    console.log("clicked")
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
    console.log("closed")
  }

  handleDelete = () => {
    this.handleClose()
    console.log("delete")
  }

  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.setState({ index: this.props.index})
  }

  render() {
    const { anchorEl, index } = this.state;
    const open = Boolean(anchorEl);
    const { text } = this.props;
    return (
      <ListItem dense divider>
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          <IconButton><Icon>keyboard_arrow_up</Icon></IconButton>
          <IconButton><Icon>keyboard_arrow_down</Icon></IconButton>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <ListItemText primary={text + " index at " + index}/>
        </Grid>
        <Grid container direction="column" justify="flex-start" alignItems="flex-end">
          <IconButton aria-label="More" aria-owns={open ? 'long-menu' : null} aria-haspopup="true" onClick={this.handleClick}><Icon>more_horiz</Icon></IconButton>
          <Menu id="long-menu" anchorEl={anchorEl} open={open} onClose={this.handleClose}>
            <MenuItem>
              <IconButton onClick={this.handleDelete}><Icon>delete</Icon></IconButton>
            </MenuItem>
          </Menu>
          <IconButton><Icon>keyboard_arrow_right</Icon></IconButton>
        </Grid>
      </ListItem>)
  }
}

export default Task;
