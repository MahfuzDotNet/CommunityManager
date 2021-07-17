import React, { useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
import {VALUES} from "../constants/values";
import {PROTOCOL} from "../constants/protocol"
import "../styles/CreateClub.css"
import MemberForm from "../components/MemberForm";
import MemberList from "../components/MemberList";
import ClubForm from "../components/ClubForm";
import SuccessMessage from "../components/SuccessMessage";
import IClub from '../interfaces/clubInterface';
import IMember from '../interfaces/memberInteface';
import { json } from 'body-parser';

const CreateClub = () => {

  let club =  {} as IClub
  let memeber = {} as IMember
  let members : IMember[] =[];
  let emptyStatus = 0 as Number

  const [clubName, setClubName] = React.useState(club.clubName)
  const [id, setId] = React.useState(memeber.id);
  const [clubId, setClubId] = React.useState(club.id);
  const [memberName, setMemberName] = React.useState("");
  const [memberSurname, setMemberSurname] = React.useState("");
  const [memberList, setMemberList] = React.useState(members);
  const [createStatus, setCreateStatus] = React.useState(Number(0));
  const [open, setOpen] = React.useState(true);

  const successMessage = () => {
    return(
      <Paper className="form-item">
        <SuccessMessage  open={open} createStatus = {createStatus} />
      </Paper>)
  }

  useEffect(() => {
    setTimeout(()=> {
      setOpen(false);
  }, 5000)
})


  const handleChange = (event: any) => {
    switch (event.target.name.toUpperCase()) {
      case VALUES.MEMBERNAME:
        setMemberName(event.target.value);
        break;
      case VALUES.MEMBERSURNAME:
        setMemberSurname(event.target.value);
        break;
      case VALUES.ADDMEMBER:
        handleAddMember()
        break;
      case VALUES.CLUBNAME:
        setClubName(event.target.value);
        break;
      case VALUES.ADDCLUB:
        handleAddClub()
        break;
      default:
        console.log("Unknown event")
    }
  };

  const handleAddMember = () => {  

    console.log(" handleAddMember------->>>>");

    let newMember : IMember= {  
      id: "",
      clubId: "",
      memberName: memberName,
      memberSurname: memberSurname
    };

    let newList = memberList.concat(newMember);

    setMemberList(newList);
    setMemberName("");
    setMemberSurname("");
  }

  const handleAddClub = () => {

    if(clubName !== "" && clubName !== undefined && memberList.length > 0){

      const url = "http://" +
      PROTOCOL.SERVER_URI +
      PROTOCOL.CREATE_CLUB_PREFIX

    let data = {
      name: clubName,
      members: memberList
    }

    axios.post(url, data).then((res : any) => { 
        console.log("res-------------->>>" + JSON.stringify(res));
          //setCreateStatus();
        let objRespose = JSON.stringify(res);

        if(Number(JSON.parse(objRespose).status) === 200){
          console.log("Number(Object.keys(JSON.stringify(res))[1])==>" + JSON.parse(objRespose).status)
   
          setCreateStatus(200);
          setOpen(true);
          setClubName("");
          setMemberList(new Array() as IMember[]);

        }        
        else{            
          setCreateStatus(0);
        }
        
    }).catch((e: AxiosError) => { // really AxiosError?
       
      setCreateStatus(500);
      console.log(e.message);
  })

    }
   
  }

  return (
    <Container className="form-container">
        <Paper className="form-item">
        <ClubForm onChange ={handleChange} clubName ={clubName} />
        </Paper>
      { createStatus != null ? successMessage() : null }
      <Paper className="form-item">
          <MemberForm
          onChange={handleChange}
          memberName={memberName}
          memberSurname={memberSurname} />
        </Paper>
        <Paper className="form-item">
          <MemberList {...memberList} />
        </Paper>

    </Container>
  )
};

export default CreateClub;
