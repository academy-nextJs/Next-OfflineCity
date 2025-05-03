import { combineSlices } from "@reduxjs/toolkit";
import { globalSlice } from "./global";
import { housesSlice } from "./houses";

const rootReducer = combineSlices(globalSlice, housesSlice);

export default rootReducer;
