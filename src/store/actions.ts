import apis from "../apis";
import {ACTION_TYPES, FetchAllPeoplesAction} from "./actionTypes";


export async function fetchAllPeoples(dispatch: (arg0: FetchAllPeoplesAction) => void){
    try {
        let {data, status} = await apis.get("/api/peoples")
        if(status === 200){
            dispatch({
                type: ACTION_TYPES.FETCH_PEOPLES,
                payload: data
            })
        }
    } catch (ex){

    }
}