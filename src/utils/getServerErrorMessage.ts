

function getServerErrorMessage(err: unknown ){
    let message = "Internal error";

    if(err && typeof err == "object"){
        if("response" in err) {
           let response = err.response as {data: string | {message: string}}
            if(typeof response.data === "string"){
                 message = response.data
            } else if (typeof response.data === "object"){
                message = response.data.message
            }
        } else {
            if("message" in err) {
                message = err.message as string
            }
        }
    }
    return message
}

export default getServerErrorMessage