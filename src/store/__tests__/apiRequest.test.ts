
import {fetchAllPeoples} from "../apiRequest";
import {People} from "../../types";



describe("Fetch all Peoples test", () => {

    it('peoples length should be 1', async function () {
        let data = await fetchAllPeoples<People[]>()
        expect(data.length).toBe(1)
    });
})

