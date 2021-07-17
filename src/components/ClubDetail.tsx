import {useContext, useState, useEffect} from 'react';
import {ClubDetailContext} from '../components/ClubDetailContext';
import {Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from '../components/ClubDetailEditForm';
import IClubDetail from '../interfaces/clubDetailInterface';


const ClubDetail = ( clubDetail: IClubDetail ) => {

    const {deleteCubDetails} = useContext(ClubDetailContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    

    useEffect(() => {
        handleClose()
    }, [])

    console.log("clubDetail.memberId======>>>" + JSON.stringify(clubDetail.memberId));
    //console.log("clubDetail.clubid======>>>" + clubDetail.clubId);


    return (
        <>
            <td>{clubDetail.clubName}</td>
            <td>{clubDetail.memberName}</td>
            <td>{clubDetail.memberSurname}</td>         
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                </td>
                <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => {
                        if(clubDetail.hasOwnProperty('memberId')) {                        
                             console.log("notdone");
                             deleteCubDetails("", clubDetail.memberId )
                  
                        }else{
                             console.log("done");
                             deleteCubDetails(clubDetail.clubId, "")                                               
                         }
                        }}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>               
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Club 
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm {...clubDetail} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
        
    </>
    )
}

export default ClubDetail;