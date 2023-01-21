import axios from "axios";


export async function fetchAllPeoples<T>() {
    return new Promise<T>(async (resolve, reject) => {
        // @ts-ignore
        resolve([
            {name: "Alewx "},
            {name: "453234"},
            {name: "hhh"},
            {name: "tytty234234"},
        ])
        // try {
        //     let {data, status} = await axios.get("https://jsonplaceholder.typicode.com/users")
        //     resolve(data)
        // } catch (ex) {
        //     reject(ex)
        // }
    })
}

