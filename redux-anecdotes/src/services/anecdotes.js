import axios from 'axios';

const baseURL = 'http://localhost:3001/anecdotes';

const getAll = async () => {
    const response = await axios.get(baseURL);
    return response.data;
};

const createNew = async (content) => {
    const response = await axios.post(baseURL, { content, votes: 0 });
    return response.data;
};

const voteForAnecdote = async (id) => {
    const { data } = await axios.get(`${baseURL}/${id}`);
    const modifiedAnecdote = { ...data, votes: data.votes + 1 };
    const response = await axios.put(`${baseURL}/${id}`, modifiedAnecdote);
    return response.data;
};

const anecdotesService = {
    getAll,
    createNew,
    voteForAnecdote,
};

export default anecdotesService;
