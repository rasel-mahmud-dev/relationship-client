import {People} from "../types";


export enum ACTION_TYPES {
    FETCH_PEOPLES,
}


export interface FetchAllPeoplesAction {
    type: ACTION_TYPES.FETCH_PEOPLES,
    payload: People[]
}


export type ActionTypes = FetchAllPeoplesAction