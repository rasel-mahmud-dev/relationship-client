import {JSXElementConstructor, ReactElement, ReactFragment, ReactPortal} from "react";
import {MemoryRouter, Route, Routes} from "react-router-dom";


function wrapper(props: { children: ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }): JSX.Element {
    return (
        <MemoryRouter initialEntries={["/"]}>
            {props.children}
            </MemoryRouter>
    )
}

export default wrapper