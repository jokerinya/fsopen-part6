import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import Notification from './Notification';

const Anecdote = (props) => {
    const dispatch = useDispatch();
    const vote = async (anecdote) => {
        dispatch(setNotification(`you voted ${anecdote.content}`, 5));
        dispatch(voteAnecdote(anecdote.id));
    };
    return (
        <>
            <div>{props.anecdote.content}</div>
            <div>
                has {props.anecdote.votes}
                <button onClick={() => vote(props.anecdote)}>vote</button>
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
