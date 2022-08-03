import React from 'react';
import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
    const addNote = async (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        props.createAnecdote(content);
        props.setNotification(`new anecdote '${content}'`, 5);
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

const mapDispatchToState = {
    createAnecdote,
    setNotification,
};

export default connect(null, mapDispatchToState)(AnecdoteForm);
