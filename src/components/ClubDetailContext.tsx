import React, {createContext, useEffect, useState, ReactNode, FC } from 'react';
import { isJSDocNamepathType } from 'typescript';
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
import IClub from '../interfaces/clubInterface';
import IClubDetail from '../interfaces/clubDetailInterface';
import { json } from 'body-parser';

export type ContextState =  {
    sortedClubDetails : IClubDetail[];
    deleteCubDetails : (id : string, cdId: string) => void;
    updateClubDetails : (clubId : string, updatedClubDetail : IClubDetail) => void;
};

const contextDefaultValues: ContextState = {
    sortedClubDetails : [],
    deleteCubDetails : () => {},
    updateClubDetails : () => {}
  };  
  
export const ClubDetailContext =  createContext<ContextState>(
    contextDefaultValues
  );

const ClubDetailProvider : FC = ({ children }) => {

const [clubDetails, setClubDetails] = useState<IClubDetail[]>([] as IClubDetail[]);

useEffect(()=> {
    const getData = async () => {
        await axios.get('http://localhost:5000/clubDetails').then((clubDetails: any) =>{
            console.log('clubDetails======>>>>' + JSON.stringify(clubDetails))
            setClubDetails(clubDetails.data);            
        })
      };
      getData();  
}, []);


const sortedClubDetails  = clubDetails.filter(cd => JSON.stringify(cd) !== '{}').sort((a,b)=>(a.clubName < b.clubName ? -1 : 1));

const updateClubDetails = (clubId : string, updatedClubDetail : IClubDetail) => {
    setClubDetails(clubDetails.map((cd) => cd.clubId === clubId ? updatedClubDetail : cd))
}

const deleteCubDetails = (clubId : string, memberId: string) => {
    console.log("id");

    if(clubId !==""){
        setClubDetails(clubDetails.filter(cd => cd.clubId !== clubId))
        appendDeletedClubDetails(clubId);
    }else if(memberId !==""){
        setClubDetails(clubDetails.filter(cd => cd.memberId !== memberId))
        appendDeletedClubDetails(memberId);
    }  
}

const appendDeletedClubDetails = (id: string) => {       
    axios.get('http://localhost:5000/delete/' + id )
        .then((response : any) => {    
            console.log(response.data );
        });    
}
return (
        <ClubDetailContext.Provider value = {{ sortedClubDetails, updateClubDetails, deleteCubDetails }}>       
            {children}
        </ClubDetailContext.Provider>
    )
}

export default ClubDetailProvider;
