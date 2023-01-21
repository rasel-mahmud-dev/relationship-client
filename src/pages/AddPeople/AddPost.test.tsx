import {fireEvent, render, screen} from "@testing-library/react";
import AddPeople from "./AddPeople";
import { Route, Routes} from "react-router-dom";

import wrapper from "../../test/wrapper.test";


describe("render Add People page", ()=>{

    const {container} = render(<Routes>
        <Route path="/" element={<AddPeople/>}/>
    </Routes>, {
        wrapper
    });

    it("render Button", async () => {
        const btn = container.querySelector("button[type='submit']") as Element
        expect(btn).toBeVisible()
    });
})

