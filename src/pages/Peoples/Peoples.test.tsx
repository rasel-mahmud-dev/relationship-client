import {render, screen} from "@testing-library/react";
import Peoples from "./Peoples";




test("it should have the correct people name john", async () => {
    render(<Peoples />);
    const peoples = await screen.findByText("john");
    expect(peoples).toBeVisible();
});