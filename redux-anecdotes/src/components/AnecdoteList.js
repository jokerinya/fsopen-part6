import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteForAnecdote } from '../reducers/anecdoteReducer';
import {
    notificate,
    removeNotification,
} from '../reducers/notificationReducer';
import anecdotesService from '../services/anecdotes';
import Notification from './Notification';

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch();
    const vote = async (anecdote) => {
        const updatedAnecdote = await anecdotesService.voteForAnecdote(
            anecdote.id
        );
        dispatch(notificate(`you voted ${updatedAnecdote.content}`));
        dispatch(voteForAnecdote(updatedAnecdote));
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
            anecdote.content.toLowerCase().includes(filter.toLowerCase())
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
