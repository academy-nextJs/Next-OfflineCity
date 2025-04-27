import { combineSlices } from "@reduxjs/toolkit";
import { globalSlice } from "./global";

const rootReducer = combineSlices(globalSlice);

export default rootReducer;
