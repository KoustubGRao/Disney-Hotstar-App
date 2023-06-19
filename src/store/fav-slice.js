import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: 'fav',
    initialState: {
        favorites:[],
        isFavoriteArr:Array(16).fill(false),
    },
    reducers:{
        addFav: (state,action)=>{
            const id = action.payload;
            const id_int = parseInt(id,10);
            const existingItem = state.favorites.find((item)=> item === id)
            if(!existingItem)
            {
                state.favorites.push(id);
            }
            state.isFavoriteArr[id_int-1] = true;
        },
        removeFav: (state,action) => {
            const id = action.payload;
            const id_int = parseInt(id,10);
            const index = state.favorites.findIndex((item) => item === id);
            if (index !== -1) {
                state.favorites.splice(index, 1);
            }
            state.isFavoriteArr[id_int-1] = false;
        }
    }
})

export const favActions = favSlice.actions;
export default favSlice;