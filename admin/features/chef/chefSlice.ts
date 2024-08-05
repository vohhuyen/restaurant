import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface Chef {
    _id: string,
    name: string,
    image: string | File,
    description: string,
}
interface ChefsState {
    chefs: Chef[],
}
const initialState: ChefsState = {
    chefs : [],
}
const chefSlice = createSlice({
    name: "chef",
    initialState,
    reducers: {
        setChef: (state, action: PayloadAction<Chef[]>) => {
            state.chefs = action.payload;
        }
    }
});

export const {setChef} = chefSlice.actions;
export default chefSlice.reducer;