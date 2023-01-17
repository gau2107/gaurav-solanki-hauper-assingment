import { createSlice } from "@reduxjs/toolkit";

const applicantDataSlice = createSlice({
  name: "applicantData",
  initialState: { list: [], selectedData: {}, total: 0 },
  reducers: {
    add(state, action) {
      state.list.push(action.payload);
    },
    select(state, action) {
      state.selectedData = { ...action.payload };
    },
    edit(state, action) {
      const { data } = action.payload;
      let tempArr = [...state.list];
      const findIndex = tempArr.findIndex((obj) => obj.id === data.id);
      tempArr[findIndex] = { ...data };
      state.list = [...tempArr];
      state.selectedData = {};
    },
    delete(state, action) {
      state.list.splice(action.payload, 1);
    },
    setTotal(state, action) {
      state.total = action.payload;
    },
  },
});

export const applicantDataActions = applicantDataSlice.actions;
export default applicantDataSlice;
