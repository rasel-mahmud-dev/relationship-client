import axios from "axios";
import Apis from "../apis";


export async function fetchAllPeoples<T>() {
    return new Promise<T>(async (resolve, reject) => {
        try {
            let {data, status} = await axios.get(Apis + "/api/peoples")
            if (status === 200) {
                resolve(data)
            }
        } catch (ex) {
            reject(ex)
        }
    })
}

