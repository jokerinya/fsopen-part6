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

// this func promisify the setTimeout, so we can 'await' it
const sleep = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

export const setNotification = (message, second) => {
    return async (dispatch) => {
        console.log('burada', message);
        dispatch(addNotificationMessage(message));
        await sleep(second);
        dispatch(deleteNotificationMessage());
    };
};

export default notificationSlice.reducer;
