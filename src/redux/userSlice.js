import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name : "user", // dat cai gi cung dc
    initialState :  {
        name : 'Trung Trương',
        age : '23',
        about : "I'm web developer",
        avaUrl : "http://i.redd.it/7ipyf6pvqac61.png",
        themeColor : "#ff9051",
    },
    reducers : { // chua nhung cach lam viec voi slice
       
        update: (state,action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.themeColor = action.payload.themeColor;
        },
        }
       
})

export const {update} = userSlice.actions;
export default userSlice.reducer;
