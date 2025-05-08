import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface LocationState {
    selectedLocation: {lat:number , lng:number} | null;
}

const initialState:LocationState = {
    selectedLocation: null
}

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers:{
        setPosition: (state , action:PayloadAction< {lat:number , lng:number}>) => {
            state.selectedLocation = action.payload;
        },
    },
});

export const {setPosition} = mapSlice.actions;
export default mapSlice