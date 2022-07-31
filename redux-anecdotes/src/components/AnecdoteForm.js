import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewAnecdote } from '../reducers/anecdoteReducer';
import {
    notificate,
    removeNotification,
} from '../reducers/notificationReducer';

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const addNote = (event) => {
        event.preventDefault();
        dispatch(addNewAnecdote(event.target.anecdote.value));
        event.target.anecdote.value = '';
        dispatch(
            notificate(`you have created '${event.target.anecdote.value}'`)
        );
        setTimeout(() => dispatch(removeNotification()), 5000);
    };

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addNote}>
                <div>
                    <input name='anecdote' />
                </div>
                <button type='submit'>create</button>
            </form>
        </>
    );
};

export default AnecdoteForm;
