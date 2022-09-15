import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Long",
    age:"18",
    about: "I am not only poor but also ugly",
    avaUrl: "https://scontent.xx.fbcdn.net/v/t1.15752-9/306331833_1250903992344283_838373087484223186_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=nDlwIJ9bPO8AX-HjbsB&_nc_ht=scontent.xx&oh=03_AVIR09exe7BMXtOwzcWWXERquF7tm_54jNLbof-HWLxcUg&oe=6349CA5B"
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
    },
  }
});

export const {update} = userSlice.actions;
export default userSlice.reducer;