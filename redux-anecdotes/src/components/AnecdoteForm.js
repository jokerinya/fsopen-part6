import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewAnecdote } from '../reducers/anecdoteReducer';
import {
    notificate,
    removeNotification,
} from '../reducers/notificationReducer';

import anecdotesService from '../services/anecdotes';

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const addNote = async (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        const newNote = await anecdotesService.createNew(content);
        dispatch(addNewAnecdote(newNote));
        dispatch(notificate(`you have created '${newNote.content}'`));
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
