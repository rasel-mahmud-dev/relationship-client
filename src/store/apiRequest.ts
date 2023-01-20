import axios from "axios";


export async function fetchAllPeoples<T>() {
    return new Promise<T>(async (resolve, reject) => {
        try {
            let {data, status} = await axios.get("https://jsonplaceholder.typicode.com/users")
            resolve(data)
        } catch (ex) {
            reject(ex)
        }
    })
}

