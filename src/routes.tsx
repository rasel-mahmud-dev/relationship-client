import App from "./App";
import {createBrowserRouter} from "react-router-dom";
import Peoples from "./pages/Peoples/Peoples";
import AddPeople from "./pages/AddPeople/AddPeople";


const router = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: "", element: <Peoples/>},
            {path: "/add-people", element: <AddPeople/>}
        ]
    },
])


export default router


