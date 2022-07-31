import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteForAnecdote } from '../reducers/anecdoteReducer';
import {
    notificate,
    removeNotification,
} from '../reducers/notificationReducer';
import Notification from './Notification';

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch();
    const vote = (anecdote) => {
        dispatch(notificate(`you voted ${anecdote.content}`));
        dispatch(voteForAnecdote(anecdote.id));
        setTimeout(() => dispatch(removeNotification()), 5000);
    };
    return (
        <>
            <div>{anecdote.content}</div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
            </div>
        </>
    );
};

const AnecdoteList = () => {
    // state.anecdotes, state.filter
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        return anecdotes.filter((anecdote) =>
            anecdote.content.toLowerCase().includes(filter.value.toLowerCase())
        );
    });
    return (
        <>
            <Notification />
            {anecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <Anecdote anecdote={anecdote} />
                </div>
            ))}
        </>
    );
};

export default AnecdoteList;
