# Exercises

> ## Exercises 6.3.-6.8.

Let's make a new version of the anecdote voting application from part 1. Take the project from [this repository](https://github.com/fullstack-hy2020/redux-anecdotes) to base your solution on.

If you clone the project into an existing git-repository, remove the git-configuration of the cloned application.

After completing these exercises, your application should look like this:

![Project Start](./readmeimg/3.png)

## 6.3: anecdotes, step1

Implement the functionality for voting anecdotes. The amount of votes must be saved to a Redux-store.

## 6.4: anecdotes, step2

Implement the functionality for adding new anecdotes.

You can keep the form uncontrolled, like we did earlier.

## 6.5: anecdotes, step3

Make sure that the anecdotes are ordered by the number of votes.

## 6.6: anecdotes, step4

If you haven't done so already, separate the creation of `action-objects` to `action creator-functions` and place them in the `src/reducers/anecdoteReducer.js` file, so do like we have been doing since the chapter action creators.

## 6.7: anecdotes, step5

Separate the creation of new anecdotes into its own component called _AnecdoteForm_. Move all logic for creating a new anecdote into this new component.

## 6.8: anecdotes, step6

Separate the rendering of the anecdote list into its own component called _AnecdoteList_. Move all logic related to voting for an anecdote to this new component.

Now the App component should look like this:

```js
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = () => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <AnecdoteForm />
            <AnecdoteList />
        </div>
    );
};

export default App;
```
