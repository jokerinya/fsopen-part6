import React from 'react';
import ReactDOM from 'react-dom/client';
// createStore has been deprecated
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

const App = () => {
    const voteFor = (type) => {
        store.dispatch({
            type: type,
        });
    };

    return (
        <div>
            <button onClick={() => voteFor('GOOD')}>good</button>
            <button onClick={() => voteFor('OK')}>ok</button>
            <button onClick={() => voteFor('BAD')}>bad</button>
            <button onClick={() => voteFor('ZERO')}>reset stats</button>
            <div>good {store.getState().good}</div>
            <div>ok {store.getState().ok}</div>
            <div>bad {store.getState().bad}</div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () => {
    root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
