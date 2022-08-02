import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteForAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import anecdotesService from '../services/anecdotes';
import Notification from './Notification';

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch();
    const vote = async (anecdote) => {
        const updatedAnecdote = await anecdotesService.voteForAnecdote(
            anecdote.id
        );
        dispatch(setNotification(`you voted ${updatedAnecdote.content}`, 10));
        dispatch(voteForAnecdote(updatedAnecdote));
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
