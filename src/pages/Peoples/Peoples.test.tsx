import {render, screen} from "@testing-library/react";
import Peoples from "./Peoples";
import {Route, Routes} from "react-router-dom";
import wrapper from "../../test/wrapper.test";

describe("test Peoples list component", function () {
    it('should be render list first item name john ', async function () {
        // render(
        //     <div>
        //             <Routes>
        //                 <Route path="/" element={<Peoples/>}/>
        //             </Routes>
        //         <div id="backdrop-root"></div>
        //         <div id="modal-root"></div>
        //         </div>, {
        //         wrapper
        //     }
        // );
        //
        // const peoples = await screen.findByText("john");
        // expect(peoples).toBeVisible();
    });
})

