import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        notificate(state, action) {
            state.value = action.payload;
        },
        removeNotification(state) {
            state.value = '';
        },
    },
});

export const { notificate, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
