//react
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// services
import anecdotesService from './services/anecdotes';

// store
import { setAnecdotes } from './reducers/anecdoteReducer';
// Components
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        anecdotesService
            .getAll()
            .then((anecdotes) => dispatch(setAnecdotes(anecdotes)));
    }, [dispatch]);

    return (
        <div>
            <h2>Anecdotes</h2>
            <Filter />
            <AnecdoteList />
            <AnecdoteForm />
        </div>
    );
};

export default App;
