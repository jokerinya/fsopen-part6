import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotificationMessage(state, action) {
            return action.payload;
        },
        deleteNotificationMessage(state) {
            return '';
        },
    },
});

export const { addNotificationMessage, deleteNotificationMessage } =
    notificationSlice.actions;

let timeoutID = 0;

export const setNotification = (message, second) => {
    return async (dispatch) => {
        dispatch(addNotificationMessage(message));
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            dispatch(deleteNotificationMessage());
        }, second * 1000);
    };
};

export default notificationSlice.reducer;
