import {createContext, Dispatch} from "react";
import {People} from "../types";
import {ActionTypes} from "./actionTypes";

export interface ContextStateType {
    dispatch: Dispatch<ActionTypes>,
    peoples: People[]
}

export const initialState = {
    dispatch: function (){},
    peoples: []
}

const AppContext = createContext<ContextStateType>(initialState)

export default AppContext
