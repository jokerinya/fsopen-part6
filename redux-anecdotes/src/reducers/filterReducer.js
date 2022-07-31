import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilter(state, action) {
            state.value = action.payload;
        },
    },
});

export const { addFilter } = filterSlice.actions;
export default filterSlice.reducer;
