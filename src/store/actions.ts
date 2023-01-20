
import {ACTION_TYPES, FetchAllPeoplesAction} from "./actionTypes";
import axios from "axios";


export async function fetchAllPeoples(dispatch: (arg0: FetchAllPeoplesAction) => void){
    try {
        let {data, status} = await axios.get("/api/peoples")
        if(status === 200){
            dispatch({
                type: ACTION_TYPES.FETCH_PEOPLES,
                payload: [{name: "sdf", friends: []}]
            })
        }
    } catch (ex){

    }
}



export async function fetchAll(){
    fetch("/api")
        .then((response) => response.json())
        .then((data) => {
            return data
        });
}