
export default {
    get: jest.fn((url) => {
        if (url === 'https://jsonplaceholder.typicode.com/todos') {
            return Promise.resolve({
                data: [
                    {title: "123"}
                ]
            });
        } else if(url === "https://jsonplaceholder.typicode.com/users"){
            return Promise.resolve({
                data: [
                    {name: "john"}
                ]
            });
        }
    }),
    post: jest.fn((url) => {
        if (url === '/something') {
            return Promise.resolve({
                data: 'data'
            });
        }
        if (url === '/something2') {
            return Promise.resolve({
                data: 'data2'
            });
        }
    })
}