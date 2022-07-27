import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteForAnecdote } from '../reducers/anecdoteReducer';

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div>{anecdote.content}</div>
            <div>
                has {anecdote.votes}
                <button onClick={() => dispatch(voteForAnecdote(anecdote.id))}>
                    vote
                </button>
            </div>
        </>
    );
};

const AnecdoteList = () => {
    const anecdotes = useSelector((state) => state);
    return (
        <>
            {anecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <Anecdote anecdote={anecdote} />
                </div>
            ))}
        </>
    );
};

export default AnecdoteList;
