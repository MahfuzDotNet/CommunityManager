import { Form, Button } from "react-bootstrap";
import {ClubDetailContext} from '../components/ClubDetailContext';
import {useContext, useState} from 'react';
import IClubDetail from "../interfaces/clubDetailInterface";

const EditForm = (clubDetail: IClubDetail) => {
    const id = clubDetail.id;
    const clubId = clubDetail.clubId;   
    const memberId = clubDetail.memberId; 
    const [clubName, setClubName] = useState(clubDetail.clubName);
    const [memberName, setMemberName] = useState(clubDetail.memberName);
    const [memberSurname, setMemberSurname] = useState(clubDetail.memberSurname);
    const {updateClubDetails} = useContext(ClubDetailContext);

    const updatedClubdetail : IClubDetail = { id, clubId, 
        clubName, 
        memberId, 
        memberName, 
        memberSurname
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();
        updateClubDetails(clubId, updatedClubdetail)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="club Name *"
                    name="clubName"
                    value={clubName}
                    onChange={(e)=> setMemberName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Member Name *"
                    name="memberName"
                    value={memberName}
                    onChange={(e)=> setMemberName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Member Sur Name*"
                    name="memberSurname"
                    value={memberSurname}
                    onChange={(e)=> setMemberSurname(e.target.value)}
                />
            </Form.Group>           
            <Button variant="success" type="submit" block>
                Edit Club Detail
            </Button>
        </Form>

     )
}


export default EditForm;