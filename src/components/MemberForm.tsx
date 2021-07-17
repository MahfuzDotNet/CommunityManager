import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {VALUES} from "../constants/values";
import "../styles/CreateClub.css";
import IMember from '../interfaces/memberInteface';

const MemberForm = (props: any) => {
  const handleChange = (event : any) => {
    props.onChange(event);
  }
  const handleChangeAndModify = (event : any, eventName : string) => {
    event.target.name = eventName;
    handleChange(event)
  }

  return(
    <Grid item container spacing={2} className="member-form" xs={3}>
        <Grid item xs={12} className="member-form-item">
          <TextField
            label="Member Name"
            value={props.memberName}
            name={VALUES.MEMBERNAME}
            className="form-input"
            variant="standard"
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} className="member-form-item">
          <TextField
            label="Member Surname"
            value={props.memberSurname}
            name={VALUES.MEMBERSURNAME}
            variant="standard"
            className="form-input"
            onChange={handleChange}/>
        </Grid>
        <IconButton onClick={event => handleChangeAndModify(event, VALUES.ADDMEMBER)}>
          <PersonAddIcon fontSize="large" />
        </IconButton>
    </Grid>
  )
}

export default MemberForm;
