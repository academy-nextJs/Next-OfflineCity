import { combineSlices } from "@reduxjs/toolkit";
import { globalSlice } from "./global";
import { housesSlice } from "./houses";
import mapSlice from "./mapSlice";
import { houseReserveSlice } from "./houseReserve";

const rootReducer = combineSlices(globalSlice, housesSlice , mapSlice , houseReserveSlice );

export default rootReducer;
