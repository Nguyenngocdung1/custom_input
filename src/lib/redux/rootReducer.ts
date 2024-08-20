import { combineReducers } from "redux";
import drawSlice from "@/features/drawSlide";
import loadingSlice from "@/features/loadingSlide";
const rootReducer = combineReducers({
  draws: drawSlice,
  loadings: loadingSlice,
});
export default rootReducer;
