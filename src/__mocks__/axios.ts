import API from "../apis";

export default {
    get: jest.fn((url) => {
        if (url === API + "/api/peoples") {
            return Promise.resolve({
                data: [
                    {name: "john"}
                ],
                status: 200
            });
        }
    })
}