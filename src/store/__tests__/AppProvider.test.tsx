import AppProvider from "../AppProvider";
import {render} from "@testing-library/react";
import AppContext from "../AppContext";

describe("App Provider", ()=>{
    it('peoples is empty by default', function () {
        const view = render(<AppProvider>
            <AppContext.Consumer>
                {(value)=>  <span>peoples: {value.peoples.length}</span>}
            </AppContext.Consumer>
        </AppProvider>)

        expect(view.getByText("peoples: 0")).toBeTruthy()
    });
})