import {createSlice} from '@reduxjs/toolkit';

const likeSlice = createSlice({
    name: 'like',
    initialState : {
        likes : [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        dislikes: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    },
    reducers:{
        increment_L: (state,action) => {
            const id = action.payload;
            const presentStateL = state.likes[id];
            const presentStateD = state.dislikes[id];
            if(presentStateL)
            {
                state.likes[id] = false;
            }
            else if(!presentStateL){
                state.likes[id] = true;
            } 
            if((!presentStateL) && (presentStateD))
            {
                state.likes[id] = true;
                state.dislikes[id] = false;
            } 
        },
        increment_D:(state,action) =>{
            const id = action.payload;
            const presentStateL = state.likes[id];
            const presentStateD = state.dislikes[id];
            if(presentStateD)
            {
                state.dislikes[id] = false;
            }
            else if(!presentStateD){
                state.dislikes[id] = true;
            }
            if((!presentStateD) && (presentStateL))
            {
                state.dislikes[id] =true;
                state.likes[id] = false;
            }     
        }
    }
})

export const likeActions = likeSlice.actions;
export default likeSlice;