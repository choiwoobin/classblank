import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Submit from 'components/common/Button';


const styles = theme => ({
    button: {
      display: 'flex',
      marginTop: theme.spacing.unit * 2,
    },
    formControl: {
      
      margin:'2%',
      width: '45%',
           
      
    },
   
  });
  
  class ControlledOpenSelect extends React.Component {
    state = {
      day: '',
      number: '',
      open: false,     
      
    };
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    handleOpen = () => {
      this.setState({ open: true });
    };
  
    render() {
      const { classes } = this.props;
      const {day,number} = this.state;
      return (
        <form autoComplete="off">          
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">day</InputLabel>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.day}
              onChange={this.handleChange}
              inputProps={{
                name: 'day',
                id: 'demo-controlled-open-select',
              }}
            >
              <MenuItem value="now">
                현재시간
              </MenuItem>
              <MenuItem value={"mon"}>월</MenuItem>
              <MenuItem value={"tue"}>화 </MenuItem>
              <MenuItem value={"wed"}>수</MenuItem>
              <MenuItem value={"thu"}>목</MenuItem>
              <MenuItem value={"fri"}>금</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">number</InputLabel>
            <Select
              open1={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.number}
              onChange={this.handleChange}
              inputProps={{
                name: 'number',
                id: 'demo-controlled-open-select',
              }}
            >
              <MenuItem value={1}>
                1
              </MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3 </MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
         
          <Submit day={day} number={number}/> 
          
          
        </form>
      );
    }
  }
  
  ControlledOpenSelect.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ControlledOpenSelect);