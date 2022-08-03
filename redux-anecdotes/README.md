# Exercises

## Exercises 6.1-6.2: [unicafe-redux](https://github.com/jokerinya/fsopen-part6/tree/main/unicafe-redux)

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

> ## Exercises 6.9.-6.12.

Let's continue working on the anecdote application using Redux that we started in exercise 6.3.

## 6.9 Better anecdotes, step7

Install Redux Toolkit for the project. Move the Redux store creation into its own file _store.js_ and use Redux Toolkit's `configureStore` to create the store. Also, start using Redux DevTools to debug the application's state easier.

## 6.10 Better anecdotes, step8

The application has a ready-made body for the _Notification_ component:

```js
const Notification = () => {
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1,
    };
    return <div style={style}>render here notification...</div>;
};

export default Notification;
```

Extend the component so that it renders the message stored in the Redux store, making the component take the following form:

```js
import { useSelector } from 'react-redux';

const Notification = () => {
    const notification = useSelector(/* something here */);
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1,
    };
    return <div style={style}>{notification}</div>;
};
export default Notification;
```

You will have to make changes to the application's existing reducer. Create a separate reducer for the new functionality by using the Redux Toolkit's `createSlice` function. Also, refactor the application so that it uses a combined reducer as shown in this part of the course material.

The application does not have to use the _Notification_ component in an intelligent way at this point in the exercises. It is enough for the application to display the initial value set for the message in the _notificationReducer._

## 6.11 Better anecdotes, step9

Extend the application so that it uses the _Notification_ component to display a message for five seconds when the user votes for an anecdote or creates a new anecdote:  
![Message](./readmeimg/8ea.png)

It's recommended to create separate [action creators](https://redux-toolkit.js.org/api/createSlice#reducers) for setting and removing notifications.

## 6.12\* Better anecdotes, step10

Implement filtering for the anecdotes that are displayed to the user.  
![Filter](./readmeimg/9ea.png)

Store the state of the filter in the redux store. It is recommended to create a new reducer and action creators for this purpose. Implement the reducer and action creators using the Redux Toolkit's `createSlice` function.

Create a new _Filter_ component for displaying the filter. You can use the following code as a template for the component:

```js
const Filter = () => {
    const handleChange = (event) => {
        // input-field value is in variable event.target.value
    };
    const style = {
        marginBottom: 10,
    };

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    );
};

export default Filter;
```

> ## Exercises 6.13.-6.14.

## 6.13 Anecdotes and the backend, step1

When the application launches, fetch the anecdotes from the backend implemented using `json-server`.

As the initial backend data, you can use, e.g. [this](https://github.com/fullstack-hy2020/misc/blob/master/anecdotes.json).

## 6.14 Anecdotes and the backend, step2

Modify the creation of new anecdotes, so that the anecdotes are stored in the backend.

> ## Exercises 6.15.-6.18.

## 6.15 Anecdotes and the backend, step3

Modify the initialization of Redux store to happen using asynchronous action creators, which are made possible by the `Redux Thunk` library.

## 6.16 Anecdotes and the backend, step4

Also modify the creation of a new anecdote to happen using asynchronous action creators, made possible by the `Redux Thunk` library.

## 6.17 Anecdotes and the backend, step5

Voting does not yet save changes to the backend. Fix the situation with the help of the `Redux Thunk` library.

## 6.18 Anecdotes and the backend, step6

The creation of notifications is still a bit tedious, since one has to do two actions and use the `setTimeout` function:

```js
dispatch(setNotification(`new anecdote '${content}'`));
setTimeout(() => {
    dispatch(clearNotification());
}, 5000);
```

Make an action creator, which enables one to provide the notification as follows:

```js
dispatch(setNotification(`you voted '${anecdote.content}'`, 10));
```

The first parameter is the text to be rendered and the second parameter is the time to display the notification given in seconds.

Implement the use of this improved notification in your application.

> ## Exercises 6.19.-6.21.

## 6.19 anecdotes and connect, step1

The redux store is currently being accessed by the components through the `useSelector` and `useDispatch` hooks.

Modify the _Notification_ component so that it uses the `connect` function instead of the hooks.

## 6.20 anecdotes and connect, step2

Do the same for the _Filter_ and _AnecdoteForm_ components.

## 6.21 anecdotes, the grand finale

You (probably) have one nasty bug in your application. If the user clicks the vote button multiple times in a row, the notification is displayed funnily. For example if a user votes twice in three seconds, the last notification is only displayed for two seconds (assuming the notification is normally shown for 5 seconds). This happens because removing the first notification accidentally removes the second notification.

Fix the bug so that after multiple votes in a row, the notification for the last vote is displayed for five seconds. This can be done by cancelling the removal of the previous notification when a new notification is displayed whenever necessary. The [documentation](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) for the setTimeout function might also be useful for this.

---

This was the last exercise for this part of the course and it's time to push your code to GitHub and mark all of your completed exercises to the [exercise submission system.](https://studies.cs.helsinki.fi/stats/courses/fullstackopen)
