import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store/store';

export interface IInitialState {
    isModalOpen: boolean;
}

const initialState: IInitialState = {
    isModalOpen: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload;
        },
    },
});

export const selectApp = (state: AppState) => state.app;

export const { setIsModalOpen } = appSlice.actions;

export default appSlice.reducer;
