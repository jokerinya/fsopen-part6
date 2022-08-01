import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        notificate(state, action) {
            return action.payload;
        },
        removeNotification(state) {
            return '';
        },
    },
});

export const { notificate, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
