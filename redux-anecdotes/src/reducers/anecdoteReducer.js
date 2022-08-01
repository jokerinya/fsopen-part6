import { createSlice } from '@reduxjs/toolkit';
// const anecdotesAtStart = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
// ];

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//     return {
//         content: anecdote,
//         id: getId(),
//         votes: 0,
//     };
// };

// const initialState = anecdotesAtStart.map(asObject);

const sortAnecdotes = (anecdotesArr) =>
    anecdotesArr.sort((a, b) => b.votes - a.votes);

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         // { type: 'VOTE', data: { id }}
//         case 'VOTE':
//             const willUpdatedAnecdote = state.find(
//                 (a) => a.id === action.data.id
//             );
//             const updatedAnecdote = {
//                 ...willUpdatedAnecdote,
//                 votes: willUpdatedAnecdote.votes + 1,
//             };
//             return sortAnecdotes(
//                 state.map((a) =>
//                     a.id === updatedAnecdote.id ? updatedAnecdote : a
//                 )
//             );
//         case 'ADD_NEW_ANECDOTE':
//             return sortAnecdotes([...state, action.data]);
//         default:
//             return state;
//     }
// };

// export const voteForAnecdote = (id) => {
//     return {
//         type: 'VOTE',
//         data: { id },
//     };
// };

// export const addNewAnecdote = (anecdote) => {
//     return {
//         type: 'ADD_NEW_ANECDOTE',
//         data: asObject(anecdote),
//     };
// };

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        voteForAnecdote(state, action) {
            // const willUpdatedAnecdote = state.find(
            //     (a) => a.id === action.payload
            // );
            // const updatedAnecdote = {
            //     ...willUpdatedAnecdote,
            //     votes: willUpdatedAnecdote.votes + 1,
            // };
            return sortAnecdotes(
                state.map((a) =>
                    a.id === action.payload.id ? action.payload : a
                )
            );
        },
        addNewAnecdote(state, action) {
            // const newAnecdote = asObject(action.payload);
            // state can be mutable when using redux/toolkit
            state.push(action.payload);
        },
        setAnecdotes(state, action) {
            return action.payload;
        },
    },
});

export const { voteForAnecdote, addNewAnecdote, setAnecdotes } =
    anecdoteSlice.actions;
export default anecdoteSlice.reducer;
