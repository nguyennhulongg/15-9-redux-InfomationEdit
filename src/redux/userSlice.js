import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Long",
    age:"18",
    about: "I am not only poor but also ugly",
    avaUrl: "https://scontent.xx.fbcdn.net/v/t1.15752-9/299727057_1119327355335747_3665978820805724920_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=oA8DQktaj3MAX_Jw0hG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKRWXHY8hwr8W--RWb0AtZfto1NGc6LBd7pgGtMc3CVCg&oe=6348F8A3",
    themeColor: "white",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor
    },
  }
});

export const {update} = userSlice.actions;
export default userSlice.reducer;
