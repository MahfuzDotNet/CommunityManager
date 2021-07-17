import IClub from "../interfaces/clubInterface";
import IMember from "../interfaces/memberInteface";

export const CREATE_CLUB = 'CREATE_CLUB';
export const createClub = ((text : IClub) => ({
    type: CREATE_CLUB,
    payload: { text },
}));

export const REMOVE_CLUB = 'REMOVE_CLUB';
export const removeClub= ((text: IClub) => ({
    type: REMOVE_CLUB,
    payload: { text },
}));

export const CREATE_MEMBER = 'CREATE_MEMBER';
export const createMember = ((text : IMember) => ({
    type: CREATE_MEMBER,
    payload: { text },
}));

export const REMOVE_MEMBER = 'REMOVE_MEMBER';
export const removeMember = ((text: IMember) => ({
    type: REMOVE_MEMBER,
    payload: { text },
}));


