import App from "./App";
import {createBrowserRouter} from "react-router-dom";
import Peoples from "./pages/Peoples/Peoples";
import AddPeople from "./pages/AddPeople/AddPeople";
import Relation from "./pages/Relation/Relation";


const router = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: "", element: <Peoples/>},
            {path: "/add-people", element: <AddPeople/>},
            {path: "/update-friends/:peopleName", element: <AddPeople/>},
            {path: "/relation/:source/:target", element: <Relation/>}
        ]
    },
])


export default router


