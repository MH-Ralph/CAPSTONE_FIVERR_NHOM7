import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { personService } from "../services/person.service";

export const getValueUserApi = createAsyncThunk(
  "person/getValueUserApi",
  async (_, ThunkApi) => {
    const result = await personService.getValueUser();
    // trả về cho action fullfiled
    return result.data.content;
  }
);

const initialState = {
  listUsers: [],
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Thành công
    builder.addCase(getValueUserApi.fulfilled, (state, action) => {
      console.log("action: ", action);
      state.listUsers = action.payload;
    });

    // Pending
    builder.addCase(getValueUserApi.pending, (state, action) => {
      console.log("Đang chờ xử lí");
    });

    // Rejected
    builder.addCase(getValueUserApi.rejected, (state, action) => {
      console.log("Lấy về không thành công");
    });
  },
});

export const {} = personSlice.actions;

export default personSlice.reducer;
