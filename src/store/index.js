import {configureStore} from '@reduxjs/toolkit';
import likeSlice from './like-slice';   
import authSlice from './auth-slice';
import favSlice from './fav-slice';

const store = configureStore({
    reducer: {
        like :likeSlice.reducer,
        auth :authSlice.reducer,
        fav :favSlice.reducer,
    }
});

export default store;