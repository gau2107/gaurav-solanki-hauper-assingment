import { configureStore } from "@reduxjs/toolkit";
import applicantDataSlice from "../slices/applicant-data-slices";

const store = configureStore({
  reducer: { applicantData: applicantDataSlice.reducer },
});

export default store;
