import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import ClubDetailProvider, {ClubDetailContext} from '../components/ClubDetailContext';
import Pagination from '../components/Pagination';
import IClubDetail from '../interfaces/clubDetailInterface';
import ClubDetail from '../components/ClubDetail';

const ListClubs = () => {
    const {sortedClubDetails} = useContext(ClubDetailContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [clubDetailsPerPage] = useState(10)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose(); 
        return () => {
            handleShowAlert();
        }
    }, [sortedClubDetails])

    console.log("sortedClubDetails=====>/>>" + JSON.stringify(sortedClubDetails));

    const indexOfLastClubDetail = currentPage * clubDetailsPerPage;
    const indexOfFirstClubDetail = indexOfLastClubDetail - clubDetailsPerPage;
    const currentClubDetails = sortedClubDetails.slice(indexOfFirstClubDetail, indexOfLastClubDetail);
    const totalPagesNum = Math.ceil(sortedClubDetails.length / clubDetailsPerPage);

    return (
    <>   
      <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Manage <b>Club Details</b></h2>
                <br/>                
            </div>          
        </div>
    </div>

    <Alert show={showAlert} variant="success" style={{backgroundColor:"#87cefa", color:"white"}}>
        Club Detail List Updated Succefully!
    </Alert>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Club Name</th>
                <th>Member Name</th>
                <th>Member Surname</th>               
            </tr>
        </thead>
        <tbody>
                {                  
                   currentClubDetails.map(
                      (cd : IClubDetail) => (
                      <tr key={ cd.clubId } >
                        <ClubDetail  {...cd }  />
                    </tr>
                    
                    )
                  )  
                }                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentTrackers ={currentClubDetails}
                sortedTrackers = {sortedClubDetails} />
    </>
    )
}
export default () => (
    <ClubDetailProvider>
      <ListClubs />
    </ClubDetailProvider>
  );