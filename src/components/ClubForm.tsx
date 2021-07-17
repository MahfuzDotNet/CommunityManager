import React, { MouseEvent, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {VALUES} from "../constants/values";
import "../styles/CreateClub.css"
import Container from "@material-ui/core/Container";
import IClub from '../interfaces/clubInterface';
import { ChangeEventHandler } from 'react';
import { Dialog } from '@material-ui/core';

const ClubForm = (props : any) => {

  const [show, setShow] = useState(true);

  const handleChange = (event : any) => {
    props.onChange(event);

    if(event.target.value !== "" ) setShow(false)   
    else setShow(true)
  };
  const handleChangeAndModify = (event: any, eventName : string) => {
    event.target.name = eventName;
    handleChange(event)  
    
  };


  return(   
    <Container maxWidth="xs">
      <form >
        <Grid container spacing={3} >
          <Grid item xs={12} className="member-form-item" >
            
            <TextField
              label="Club Name"
              name={VALUES.CLUBNAME}
              value={props.clubName}
              size="small"
              variant="standard"
              onChange={handleChange}  
              helperText={ show ? 'please input club name ' : ' '} />
              
          </Grid>
          <Grid item xs={12}>
            <IconButton aria-label="addMember"  onClick={event => handleChangeAndModify(event, VALUES.ADDCLUB)}>
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </Container>
   
  )

};

export default ClubForm;
